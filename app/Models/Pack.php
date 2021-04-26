<?php

namespace App\Models;

use Barryvdh\LaravelIdeHelper\Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

/**
 * App\Models\Pack
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property int $user_id
 * @property int $first_lang_id
 * @property int $second_lang_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Collection|Flashcard[] $flashcards
 * @property-read int|null $flashcards_count
 * @property-read User $user
 * @method static Builder|Pack my()
 * @method static Builder|Pack newModelQuery()
 * @method static Builder|Pack newQuery()
 * @method static Builder|Pack query()
 * @method static Builder|Pack whereCreatedAt($value)
 * @method static Builder|Pack whereId($value)
 * @method static Builder|Pack whereName($value)
 * @method static Builder|Pack whereUpdatedAt($value)
 * @mixin Eloquent
 */
class Pack extends Model
{
    use HasFactory;

    /** ------------------- Parameters ------------------ **/
    protected $with = [
        'flashcards'
    ];

    protected $appends = [
        'progress'
    ];

    protected $fillable = [
        'id',
        'name',
        'description',
        'first_lang_id',
        'second_lang_id',
    ];

    /** ------------------- Relations ------------------- **/
    public function flashcards()
    {
        return $this->hasMany(Flashcard::class, 'pack_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /** -------------------- Scopes --------------------- **/

    /**
     * @param $query
     */
    public function scopeMy($query)
    {
        return $query->whereUserId(Auth::id());
    }

    /** -------------------- Methods -------------------- **/

    /** ------------------- Attributes ------------------ **/
    public function getProgressAttribute()
    {
        return $this->flashcards->pluck('status_id')->avg() * 20;
    }
}
