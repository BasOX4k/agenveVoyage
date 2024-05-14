<?php


namespace App\DataFixtures;

use App\Entity\Destination;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class DestinationFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $destinationsData = [
            ["name" => "Paris", "description" => "La ville de l'amour et des lumières.", "location" => "48.8566, 2.3522"],
            ["name" => "New York", "description" => "La ville qui ne dort jamais.", "location" => "40.7128, -74.0060"],
            ["name" => "Tokyo", "description" => "La capitale animée du Japon.", "location" => "35.6895, 139.6917"],
            ["name" => "London", "description" => "La ville historique de la royauté et de la diversité.", "location" => "51.5074, -0.1278"],
            ["name" => "Rome", "description" => "La ville éternelle avec une richesse culturelle inégalée.", "location" => "41.9028, 12.4964"],
            ["name" => "Sydney", "description" => "La ville portuaire dynamique de l'Australie.", "location" => "-33.8688, 151.2093"],
            ["name" => "Dubai", "description" => "La ville du futur avec des gratte-ciel emblématiques.", "location" => "25.276987, 55.296249"],
            ["name" => "Rio de Janeiro", "description" => "La ville brésilienne avec des plages de renommée mondiale.", "location" => "-22.9068, -43.1729"],
            ["name" => "Barcelona", "description" => "La ville espagnole de l'art et de l'architecture.", "location" => "41.3851, 2.1734"],
            ["name" => "Cape Town", "description" => "La ville sud-africaine avec une beauté naturelle spectaculaire.", "location" => "-33.9249, 18.4241"],
        ];

        foreach ($destinationsData as $data) {
            $destination = new Destination();
            $destination->setNom($data['name']); // Corrected 'nom' to 'name'
            $destination->setDescription($data['description']);
            $destination->setLocalisation($data['location']); // Corrected 'localisation' to 'location'

            $manager->persist($destination);
        }

        $manager->flush();
    }
}
