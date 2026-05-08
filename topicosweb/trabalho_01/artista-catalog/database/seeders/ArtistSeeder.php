<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Artist;
use App\Models\User;
use App\Models\Review;

class ArtistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create some test users
        $users = User::factory(3)->create();

        // Create artists
        $artists = [
            [
                'name' => 'The Beatles',
                'genre' => 'Rock',
                'biography' => 'Banda britânica revolucionária que transformou a música popular do século XX.',
            ],
            [
                'name' => 'David Bowie',
                'genre' => 'Rock',
                'biography' => 'Ícone do rock progressivo e glam rock, conhecido por reinventar-se constantemente.',
            ],
            [
                'name' => 'Miles Davis',
                'genre' => 'Jazz',
                'biography' => 'Lendário trompetista que redefiniu o jazz moderno e foi pioneiro em múltiplos estilos.',
            ],
            [
                'name' => 'Aretha Franklin',
                'genre' => 'Soul',
                'biography' => 'Rainha do Soul com uma voz inconfundível e presença cultural incomparável.',
            ],
            [
                'name' => 'Pink Floyd',
                'genre' => 'Rock Progressivo',
                'biography' => 'Pioneiros do rock progressivo e experimental com álbuns conceituais aclamados.',
            ],
            [
                'name' => 'Ella Fitzgerald',
                'genre' => 'Jazz',
                'biography' => 'Primeira-dama do jazz, conhecida por sua voz perfeita e interpretação impecável.',
            ],
        ];

        foreach ($artists as $artistData) {
            $artist = Artist::create($artistData);

            // Create some random reviews
            foreach ($users as $user) {
                if (rand(0, 1)) {
                    Review::create([
                        'user_id' => $user->id,
                        'artist_id' => $artist->id,
                        'rating' => rand(3, 5),
                    ]);
                }
            }
        }
    }
}

