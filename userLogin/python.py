import turtle

# Set up the screen
screen = turtle.Screen()
screen.title("BMW Logo Drawing")
screen.bgcolor("white")
screen.setup(width=800, height=800)

# Create the turtle
drawer = turtle.Turtle()
drawer.speed(10)
drawer.pensize(2)

def draw_circle(color, radius, x, y):
    drawer.penup()
    drawer.goto(x, y - radius)
    drawer.pendown()
    drawer.begin_fill()
    drawer.color(color)
    drawer.circle(radius)
    drawer.end_fill()

def draw_bmw_logo():
    # Draw the outer black circle
    draw_circle("black", 200, 0, 0)

    # Draw the white circle inside
    draw_circle("white", 180, 0, 0)

    # Draw the four sections (blue and white quadrants)
    for angle, color in [(45, "blue"), (135, "white"), (225, "blue"), (315, "white")]:
        drawer.penup()
        drawer.goto(0, 0)
        drawer.setheading(angle)
        drawer.forward(90)
        drawer.begin_fill()
        drawer.color(color)
        drawer.pendown()
        drawer.circle(90, 90)
        drawer.goto(0, 0)
        drawer.end_fill()

    # Draw the inner black ring
    draw_circle("black", 60, 0, 0)

# Draw the BMW logo
draw_bmw_logo()

# Keep the window open
turtle.done()
