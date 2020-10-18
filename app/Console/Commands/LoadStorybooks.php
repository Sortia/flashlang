<?php

namespace App\Console\Commands;

use App\Helpers\Timer;
use App\Models\Storybook;
use Illuminate\Console\Command;

class LoadStorybooks extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'storybook:load {eng} {rus}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Loading storybooks from file';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        Timer::start();

        $rus = $this->readFile($this->argument('rus'));
        $eng = $this->readFile($this->argument('eng'));

        $this->process($eng, $rus);

        Timer::stop();
        $this->comment(Timer::get());
    }

    /**
     * Read $name file
     */
    private function readFile($name)
    {
        $this->comment('Start read ' . $name);

        $file = file($name);

        $this->comment('Finish read ' . $name);

        return $file;
    }

    /**
     * Add sentences in database
     */
    private function process($eng, $rus): void
    {
        Storybook::truncate();

        $arrText = [];
        $countLines = count($eng);

        $this->comment('Total rows: ' . $countLines);
        $this->comment('Add to database...');

        $bar = $this->output->createProgressBar($countLines);

        $bar->start();

        for ($i = 0; $i < $countLines; $i++) {
            $arrText[] = [
                'eng' => $eng[$i],
                'rus' => $rus[$i],
            ];

            if (count($arrText) === 100) {
                Storybook::on()->insert($arrText);
                $arrText = [];
            }

            $bar->advance();
        }

        $bar->finish();
    }
}
