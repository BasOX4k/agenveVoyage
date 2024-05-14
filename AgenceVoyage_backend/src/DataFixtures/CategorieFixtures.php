<?php
// CategorieFixtures.php

namespace App\DataFixtures;

use App\Entity\Categorie;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class CategorieFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        for ($i = 0; $i < 10; $i++) {
            $categorie = new Categorie();
            $categorie->setPays("Country " . ($i + 1));
            $categorie->setEvenement("Event " . ($i + 1));
            $categorie->setDuree(new \DateTime());

            $manager->persist($categorie);
            $this->addReference('category_' . ($i + 1), $categorie);
        }

        $manager->flush();
    }
}
