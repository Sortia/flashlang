<?php

namespace App\Http\Controllers;

use App\Helpers\MoveHelper;
use App\Models\LessonItem;
use Illuminate\Support\Facades\DB;

class LessonItemController extends Controller
{
    /**
     * @param LessonItem $lessonItem
     * @return LessonItem
     */
    public function show(LessonItem $lessonItem)
    {
        return $lessonItem;
    }

    /**
     * @return mixed
     */
    public function store()
    {
        return LessonItem::create($this->request->all());
    }

    /**
     * @param LessonItem $lessonItem
     * @return bool
     */
    public function update(LessonItem $lessonItem)
    {
        return $lessonItem->update($this->request->all());
    }

    /**
     * @param LessonItem $lessonItem
     * @return bool|null
     */
    public function destroy(LessonItem $lessonItem)
    {
        // пересчет порядковых номеров элементов
        $lessonItems = LessonItem::on()
            ->where('lesson_id', $lessonItem->lesson_id)
            ->where('order_number', '>', $lessonItem->order_number)
            ->get();

        $mover = new MoveHelper($lessonItems, $lessonItem->order_number);

        $mover->moveUp();

        return $lessonItem->delete();
    }

    /**
     * @return mixed
     */
    public function move()
    {
        return DB::transaction(function () {
            $max = $this->request->from > $this->request->to ? $this->request->from : $this->request->to;
            $min = $this->request->from < $this->request->to ? $this->request->from : $this->request->to;

            $lessonItems = LessonItem::on()
                ->where('lesson_id', $this->request->lesson_id)
                ->where('order_number', '>=', $min)
                ->where('order_number', '<=', $max)
                ->get();

            $mover = new MoveHelper($lessonItems, $this->request->from, $this->request->to);
            $mover->move();

            return true;
        });
    }
}
