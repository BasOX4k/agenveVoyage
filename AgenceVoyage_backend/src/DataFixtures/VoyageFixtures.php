<?php
namespace App\DataFixtures;

use App\Entity\Voyage;
use App\Entity\Categorie;
use App\Entity\Destination;
use App\Entity\User; // Make sure to import User entity
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class VoyageFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        // Get the user reference with ID 1
        $user = $manager->getRepository(User::class)->findOneBy(['id' => 1]);

        for ($i = 0; $i < 3; $i++) {
            $voyage = new Voyage();
            $voyage->setNom("Voyage " . ($i + 1));
            $voyage->setDateDepart(new \DateTime());
            $voyage->setDateRetour(new \DateTime());
            $voyage->setDescription("Description of Voyage " . ($i + 1));
            
            // Set the user for the voyage
            $voyage->setUser($user);

            // Set random destination ID between 1 and 10
            $destinationId = mt_rand(1, 10);
            $voyage->setDestination($this->getReference('destination_' . $destinationId));

            // Add random category IDs between 1 and 10
            $categoryIds = mt_rand(1, 10);
            for ($j = 0; $j < $categoryIds; $j++) {
                $categoryId = mt_rand(1, 10);
                $voyage->addCategorie($this->getReference('category_' . $categoryId));
            }

            $manager->persist($voyage);
        }

        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            DestinationFixtures::class,
            CategorieFixtures::class,
        ];
    }
}
