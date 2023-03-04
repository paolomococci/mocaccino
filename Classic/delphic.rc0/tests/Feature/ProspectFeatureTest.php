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

    /**
     * @test
     */
    public function root_endpoint_with_session_test(): void
    {
        $this->withSession(['sample' => false])->get('/')->assertOk();
    }

    /**
     * @test
     */
    public function root_endpoint_with_authentication_test(): void
    {
        $user = User::factory()->create();
        $this->actingAs($user)
            ->withSession(['sample' => false])
            ->get('/')
            ->assertOk();
    }

    /**
     * @test
     */
    public function prospects_get_endpoint_test(): void
    {
        $this->get('/prospects')->assertRedirect();
    }

    /**
     * @test
     */
    public function prospects_get_endpoint_with_authentication_test(): void
    {
        $user = User::factory()->create();
        $this->actingAs($user)
            ->withSession(['message' => 'Today\'s sample!'])
            ->get('/prospects')
            ->assertOk();
    }

    /**
     * @test
     */
    public function prospects_post_endpoint_with_authentication_test(): void
    {
        $user = User::factory()->create();
        $this->actingAs($user)
            ->withSession(['message' => 'Today\'s sample!'])
            ->post(route('prospects.store'))
            ->assertRedirect();
    }
}
