<?php
declare(strict_types=1);

namespace Test;

use PHPUnit\Framework\TestCase;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

/**
 * TwigTest
 * @covers 
 * @group group
 */
class TwigTest extends TestCase
{
    private array $json_data;
    private Environment $twig;

    protected function setUp(): void
    {
        parent::setUp();
    
        // Get json data from file
        $file = 'data/data.json';
        $this->json_data = json_decode(
            file_get_contents($file),
            true
        ); 

        if($this->json_data === null) {
            throw new \Exception("data.json not valid", 1);
        }

        // Add single page data
        $this->json_data['Page'] = $this->json_data["Pages"][0];

        // Add single post data
        $this->json_data['Post'] = $this->json_data["Posts"][0];

        //Twig Loader
        $loader = new FilesystemLoader('templates/twigphp');
        $this->twig = new Environment($loader, ['strict_variables' => true, 'debug' => true, 'cache' => false]);
    }
    public function test404Template()
    {
        try {
            $output = $this->twig->render('404.html.twig', $this->json_data);
            $this->assertNotEmpty($output);
        } catch (\Exception $e) {
            var_dump($e->getMessage());

            $this->assertInstanceOf(Twig\Error\RuntimeError::class, $e::class);
        }
    }
    public function testIndexTemplate()
    {
        try {
            $output = $this->twig->render('index.html.twig', $this->json_data);
            $this->assertNotEmpty($output);
        } catch (\Exception $e) {
            var_dump($e->getMessage());

            $this->assertInstanceOf(Twig\Error\RuntimeError::class, $e::class);
        }
    }
    public function testLoginTemplate()
    {
        try {
            $output = $this->twig->render('login.html.twig', $this->json_data);
            $this->assertNotEmpty($output);
        } catch (\Exception $e) {
            var_dump($e->getMessage());

            $this->assertInstanceOf(Twig\Error\RuntimeError::class, $e::class);
        }
    }
    public function testPageTemplate()
    {
        try {
            $output = $this->twig->render('page.html.twig', $this->json_data);
            $this->assertNotEmpty($output);
        } catch (\Exception $e) {
            var_dump($e->getMessage());

            $this->assertInstanceOf(Twig\Error\RuntimeError::class, $e::class);
        }
    }
    public function testSearchTemplate()
    {
        try {
            $output = $this->twig->render('search.html.twig', $this->json_data);
            $this->assertNotEmpty($output);
        } catch (\Exception $e) {
            var_dump($e->getMessage());

            $this->assertInstanceOf(Twig\Error\RuntimeError::class, $e::class);
        }
    }
    public function testSingleTemplate()
    {
        try {
            $output = $this->twig->render('single.html.twig', $this->json_data);
            $this->assertNotEmpty($output);
        } catch (\Exception $e) {
            var_dump($e->getMessage());

            $this->assertInstanceOf(Twig\Error\RuntimeError::class, $e::class);
        }
    }
}
