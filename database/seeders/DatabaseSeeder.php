<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
        \App\Models\Post::create([
            'title'     => $faker->text(),
            'content'   => $faker->paragraphs(rand(5, 10), true)
        ]);
    }
}