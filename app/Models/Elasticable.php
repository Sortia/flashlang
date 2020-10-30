<?php

namespace App\Models;

trait Elasticable
{
    /**
     * @return string
     */
    public function getSearchIndex()
    {
        return $this->getTable();
    }

    /**
     * @return mixed
     */
    public function getSearchType()
    {
        if (property_exists($this, 'useSearchType')) {
            return $this->useSearchType;
        }

        return $this->getTable();
    }

    /**
     * @return mixed
     */
    public function toSearchArray()
    {
        return $this->toArray();
    }
}
