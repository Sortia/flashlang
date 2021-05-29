<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\CourseUser;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Auth;

/**
 * Class CourseController
 * @package App\Http\Controllers
 */
class CourseController extends Controller
{
    /**
     * @return Course[]|Collection
     */
    public function index()
    {
        return Course::all();
    }

    /**
     * @param Course $course
     * @return Course
     */
    public function show(Course $course)
    {
        return $course->load('lessons');
    }

    /**
     * @return mixed
     */
    public function store()
    {
        return Course::create($this->request->all());
    }

    /**
     * @param Course $course
     * @return bool
     */
    public function update(Course $course)
    {
        return $course->update($this->request->all());
    }

    /**
     * @param Course $course
     */
    public function destroy(Course $course)
    {
        $course->delete();
    }

    /**
     * @param Course $course
     */
    public function start(Course $course)
    {
        if (!CourseUser::on()->where('course_id', $course->id)->where('user_id', Auth::id())->exists()) {
            CourseUser::create([
                'course_id' => $course->id,
                'user_id' => Auth::id(),
            ]);
        }
    }
}
