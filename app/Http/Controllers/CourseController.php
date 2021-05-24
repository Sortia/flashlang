<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index()
    {
        return Course::all();
    }

    public function show(Course $course)
    {
        return $course;
    }

    public function store(Request $request)
    {
        return Course::create($request->all());
    }

    public function update(Course $course, Request $request)
    {
        return $course->update($request->all());
    }

    public function destroy(Course $course)
    {
        $course->delete();
    }
}
