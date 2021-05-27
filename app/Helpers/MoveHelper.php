<?php

namespace App\Helpers;

use App\Models\Lesson;
use Illuminate\Database\Eloquent\Collection;

class MoveHelper
{
    private Collection $collection;

    private Lesson $element;

    private int $from;

    private int $to;

    public function __construct($collection, $from, $to)
    {
        $this->collection = $collection;
        $this->from = $from;
        $this->to = $to;
    }

    public function move()
    {
        $this->findDraggableElement();
        $this->removeDraggableElement();
        $this->moveCollection();
        $this->pasteElement();
    }

    private function findDraggableElement()
    {
        $this->element = $this->collection->filter(fn($lesson) => $lesson->order_number === $this->from)->first();
    }

    private function removeDraggableElement()
    {
        $this->collection->except($this->element->id);
    }

    private function moveCollection()
    {
        if ($this->from > $this->to) { // перемещение вверх
            $this->moveUp();
        } elseif ($this->from < $this->to) {
            $this->modeDown();
        }
    }

    private function moveUp()
    {
        foreach ($this->collection as $element) {
            $element->update(['order_number' => $element->order_number + 1]);
        }
    }

    private function modeDown()
    {
        foreach ($this->collection as $element) {
            $element->update(['order_number' => $element->order_number - 1]);
        }
    }

    private function pasteElement()
    {
        $this->element->update(['order_number' => $this->to]);
    }
}

/**
 * 1. извлечь редактируемый жлемент из массива
 * 2. при перемещении вверх сдвинуть все элементы вниз на один начиная с $this->request->to
 * 3. при перемещении вниз сдвинуть все элементы вверх на один начиная с $this->request->from и заканчивая $this->request->to
 */
