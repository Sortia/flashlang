<?php

namespace App\Repositories;

use App\Models\Storybook;
use Elasticsearch\Client;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Arr;

class StorybookRepository
{
    private Client $elasticsearch;

    /**
     * StorybookRepository constructor.
     * @param Client $elasticsearch
     */
    public function __construct(Client $elasticsearch)
    {
        $this->elasticsearch = $elasticsearch;
    }

    /**
     * Search by $query
     *
     * @param string $query
     * @return Collection
     */
    public function search(string $query = '')
    {
        $items = $this->searchOnElasticsearch($query);

        return $this->buildCollection($items);
    }

    /**
     * Search on elasticsearch
     *
     * @param string $query
     * @return array
     */
    private function searchOnElasticsearch(string $query = ''): array
    {
        $model = new Storybook;

        return $this->elasticsearch->search([
            'index' => $model->getSearchIndex(),
            'type' => $model->getSearchType(),
            'body' => [
                'size' => 50,
                'query' => [
                    'multi_match' => [
                        'fields' => ['eng', 'rus'],
                        'query' => $query,
                    ],
                ],
            ],
        ]);
    }

    /**
     *  Get collection of models
     *
     * @param array $items
     * @return Collection
     */
    private function buildCollection(array $items)
    {
        $ids = Arr::pluck($items['hits']['hits'], '_id');

        return Storybook::findMany($ids)
            ->sortBy(function ($article) use ($ids) {
                return array_search($article->getKey(), $ids);
            })->shuffle();
    }
}
