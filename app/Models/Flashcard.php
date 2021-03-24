<?php

namespace App\Models;

use Barryvdh\LaravelIdeHelper\Eloquent;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * App\Models\Flashcard
 *
 * @property int $id
 * @property string $first_side
 * @property string $second_side
 * @property int $status_id
 * @property int $pack_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Pack $pack
 * @property-read Status $status
 * @method static Builder|Flashcard newModelQuery()
 * @method static Builder|Flashcard newQuery()
 * @method static Builder|Flashcard query()
 * @method static Builder|Flashcard whereCreatedAt($value)
 * @method static Builder|Flashcard whereFirstSide($value)
 * @method static Builder|Flashcard whereId($value)
 * @method static Builder|Flashcard wherePackId($value)
 * @method static Builder|Flashcard whereSecondSide($value)
 * @method static Builder|Flashcard whereStatusId($value)
 * @method static Builder|Flashcard whereUpdatedAt($value)
 * @mixin Eloquent
 */
class Flashcard extends Model
{
    use HasFactory;
    /** ------------------- Parameters ------------------ **/
    protected $fillable = [
        'id',
        'first_side',
        'second_side',
        'status_id',
    ];

    protected $appends = [
        'front',
        'back'
    ];

    /** ------------------- Relations ------------------- **/
    public function pack()
    {
        return $this->belongsTo(Pack::class);
    }

    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    /** -------------------- Methods -------------------- **/

    /**
     * @return bool
     */
    public function isStudied(): bool
    {
        return $this->status_id === 5;
    }

    /**
     * @return mixed
     * @throws Exception
     */
    public function getFrontAttribute(): string
    {
        $sideName = get_show_side_name();

        return $this->$sideName;
    }

    /**
     * @return mixed
     * @throws Exception
     */
    public function getBackAttribute(): string
    {
        $sideName = get_hidden_side_name();

        return $this->$sideName;
    }
}
