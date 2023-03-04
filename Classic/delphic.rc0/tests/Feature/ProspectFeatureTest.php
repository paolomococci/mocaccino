<?php

namespace Tests\Feature;

use Tests\TestCase;

class ProspectFeatureTest extends TestCase
{
    /**
     * @test
     */
    public function session_application_test(): void
    {
        $response = $this->get('/');
        $response->assertStatus(200);
        $response->dumpHeaders();
        $response->dumpSession();
        $response->dd();
    }
    /**
     * @test
     */
    public function root_endpoint_test(): void
    {
        $this->get('/')->assertOk();
    }

    /**
     * @test
     */
    public function login_get_endpoint_test(): void
    {
        $this->get('/login')->assertOk();
    }
}
