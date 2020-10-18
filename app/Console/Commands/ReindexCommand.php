<?php

namespace App\Console\Commands;

use App\Models\Storybook;
use Elasticsearch\Client;
use Illuminate\Console\Command;

class ReindexCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'search:reindex';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Indexes all articles to Elasticsearch';

    private Client $elasticsearch;

    public function __construct(Client $elasticsearch)
    {
        parent::__construct();

        $this->elasticsearch = $elasticsearch;
    }

    public function handle()
    {
        $bar = $this->output->createProgressBar(Storybook::count());

        $bar->start();

        foreach (Storybook::cursor() as $storybook)
        {
            /** @var Storybook $storybook */
            $this->elasticsearch->index([
                'index' => $storybook->getSearchIndex(),
                'type' => $storybook->getSearchType(),
                'id' => $storybook->getKey(),
                'body' => $storybook->toSearchArray(),
            ]);

            $bar->advance();
        }
        $bar->finish();

        $this->info("\nDone!");
    }
}
