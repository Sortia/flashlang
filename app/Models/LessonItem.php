<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class LessonItem extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name',
        'content',
        'lesson_id',
        'answers',
        'type',
        'order_number',
    ];

    protected $casts = [
        'answers' => 'array'
    ];

    public function lesson()
    {
        return $this->belongsTo(Lesson::class);
    }
}
