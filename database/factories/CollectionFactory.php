<?php

namespace Database\Factories;

use App\Models\Collection;
use Illuminate\Database\Eloquent\Factories\Factory;

class CollectionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Collection::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => $this->faker->numberBetween(1, 3),
            'name' => $this->faker->text(15),
            'description' => $this->faker->text(50),
            'is_public' => true,
            'first_lang_id' => $this->faker->numberBetween(1, 3),
            'second_lang_id' => $this->faker->numberBetween(1, 3),
        ];
    }
}
