import pygame
import sys

# Initialize Pygame
pygame.init()

# Constants
WIDTH, HEIGHT = 800, 400
WHITE = (255, 255, 255)
GROUND_HEIGHT = 50
CHARACTER_SIZE = 40
CHARACTER_COLOR = (0, 0, 0)
JUMP_HEIGHT = 200
GRAVITY = 1

# Create the screen
screen = pygame.display.set_mode((WIDTH, HEIGHT))

# Character properties
character = pygame.Rect(50, HEIGHT - GROUND_HEIGHT - CHARACTER_SIZE, CHARACTER_SIZE, CHARACTER_SIZE)
character_speed = 5
jump = False
jump_count = JUMP_HEIGHT

# Main game loop
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    keys = pygame.key.get_pressed()
    if keys[pygame.K_SPACE] and not jump:
        jump = True

    if jump:
        character.y -= jump_count
        jump_count -= GRAVITY
        if character.y >= HEIGHT - GROUND_HEIGHT - CHARACTER_SIZE:
            jump = False
            character.y = HEIGHT - GROUND_HEIGHT - CHARACTER_SIZE
            jump_count = JUMP_HEIGHT

    if keys[pygame.K_RIGHT]:
        character.x += character_speed

    if keys[pygame.K_LEFT]:
        character.x -= character_speed

    # Draw everything
    screen.fill(WHITE)
    pygame.draw.rect(screen, CHARACTER_COLOR, character)
    pygame.draw.rect(screen, (0, 255, 0), (0, HEIGHT - GROUND_HEIGHT, WIDTH, GROUND_HEIGHT))

    pygame.display.update()
