<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Staudenmeir\EloquentJsonRelations\HasJsonRelationships;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use Notifiable;

    protected $with = [
        'role.permissions',
        'courses',
        'lessons',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'complexity',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function packs()
    {
        return $this->hasMany(Pack::class);
    }

    public function flashcards()
    {
        return $this->hasManyThrough(Flashcard::class, Pack::class);
    }

    public function courses()
    {
        return $this->belongsToMany(Course::class);
    }

    public function lessons()
    {
        return $this->belongsToMany(Lesson::class);
    }

    public function studyFlashcards()
    {
        return $this->flashcards()->whereNull('studied_at');
    }

    public function studiedFlashcards()
    {
        return $this->flashcards()->whereNotNull('studied_at');
    }

    public function studiedInThisWeekFlashcards()
    {
        return $this->studiedFlashcards()->whereBetween('studied_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()]);
    }

    public function studiedInThisMonthFlashcards()
    {
        return $this->studiedFlashcards()->whereBetween('studied_at', [Carbon::now()->startOfMonth(), Carbon::now()->endOfMonth()]);
    }

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    protected $appends = ['permissions', 'settings'];

    public function getPermissionsAttribute()
    {
        return [];
    }

    public function getSettingsAttribute()
    {
        return get_all_settings();
    }


}
