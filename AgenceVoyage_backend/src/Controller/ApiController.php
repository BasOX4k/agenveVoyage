<?php

namespace App\Controller;

use App\Repository\CategorieRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;


#[Route('/api/categorie', name: 'api_categorie_')]
class ApiController extends AbstractController
{
    #[Route('s', name: 'index')]
    public function index(CategorieRepository $categorieRepository): Response
    {
        $catgories = $categorieRepository->findAll();
        return $this->json(data: $catgories, context: [
            'groups' => 'api_categorie_index',
        ]);
    }
}
