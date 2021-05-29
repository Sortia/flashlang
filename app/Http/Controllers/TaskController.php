<?php

namespace App\Http\Controllers;

use App\Helpers\MoveHelper;
use App\Models\Task;
use Illuminate\Support\Facades\DB;

class TaskController extends Controller
{
    /**
     * @param Task $task
     * @return Task
     */
    public function show(Task $task)
    {
        return $task;
    }

    /**
     * @return mixed
     */
    public function store()
    {
        return Task::create($this->request->all());
    }

    /**
     * @param Task $task
     * @return bool
     */
    public function update(Task $task)
    {
        return $task->update($this->request->all());
    }

    /**
     * @param Task $task
     * @return bool|null
     */
    public function destroy(Task $task)
    {
        // пересчет порядковых номеров элементов
        $tasks = Task::on()
            ->where('lesson_id', $task->lesson_id)
            ->where('order_number', '>', $task->order_number)
            ->get();

        $mover = new MoveHelper($tasks, $task->order_number);

        $mover->moveUp();

        return $task->delete();
    }

    /**
     * @return mixed
     */
    public function move()
    {
        return DB::transaction(function () {
            $max = $this->request->from > $this->request->to ? $this->request->from : $this->request->to;
            $min = $this->request->from < $this->request->to ? $this->request->from : $this->request->to;

            $tasks = Task::on()
                ->where('lesson_id', $this->request->lesson_id)
                ->where('order_number', '>=', $min)
                ->where('order_number', '<=', $max)
                ->get();

            $mover = new MoveHelper($tasks, $this->request->from, $this->request->to);
            $mover->move();

            return true;
        });
    }
}
