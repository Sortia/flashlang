<?php

namespace App\Http\Controllers;

use App\Helpers\MoveHelper;
use App\Models\Lesson;
use Illuminate\Support\Facades\DB;

/**
 * Class LessonController
 * @package App\Http\Controllers
 */
class LessonController extends Controller
{
    /**
     * @param Lesson $lesson
     * @return Lesson
     */
//    public function show(Lesson $lesson)
//    {
//        return $lesson->load('items');
//    }

    /**
     * @return mixed
     */
    public function store()
    {
        return Lesson::create($this->request->all());
    }

    /**
     * @param Lesson $lesson
     * @return bool
     */
    public function update(Lesson $lesson)
    {
        return $lesson->update($this->request->all());
    }

    /**
     * @param Lesson $lesson
     * @return bool|null
     */
    public function destroy(Lesson $lesson)
    {
        // пересчет порядковых номеров модулей
        $lessons = Lesson::on()
            ->where('course_id', $lesson->course_id)
            ->where('order_number', '>', $lesson->order_number)
            ->get();

        $mover = new MoveHelper($lessons, $lesson->order_number);

        $mover->moveUp();

        return $lesson->delete();
    }

    /**
     * @return mixed
     */
    public function move()
    {
        return DB::transaction(function () {
            $max = $this->request->from > $this->request->to ? $this->request->from : $this->request->to;
            $min = $this->request->from < $this->request->to ? $this->request->from : $this->request->to;

            $lessons = Lesson::on()
                ->where('course_id', $this->request->course_id)
                ->where('order_number', '>=', $min)
                ->where('order_number', '<=', $max)
                ->get();

            $mover = new MoveHelper($lessons, $this->request->from, $this->request->to);
            $mover->move();

            return true;
        });
    }
}

