<?php

namespace App\Controller\Api;

use App\Repository\ReservationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/reservation', name: 'api_reservation_')]
class ReservationController extends AbstractController
{
    #[Route('s', name: 'index')]
    public function index(ReservationRepository $reservationRepository): Response
    {
        $reservations = $reservationRepository->findAll();
        return $this->json(data: $reservations, context:  [
            'groups' => 'api_voyage_index',
        ]);
    }
}
