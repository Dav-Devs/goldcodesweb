<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PostLikesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'posts' => $this->faker->name(),
            'likes' => $this->faker->unique()->integer(),
            'liked_at' => now(),
        ];
    }
}
