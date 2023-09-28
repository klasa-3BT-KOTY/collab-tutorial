import turtle

#okno gry
okno = turtle.Screen()
okno.title("Turtle Tenis")
okno.bgcolor("black")
okno.setup(width=800, height=400)

#gracze
gracz1 = turtle.Turtle()
gracz1.speed(0)
gracz1.shape("square")
gracz1.color("white")
gracz1.shapesize(stretch_wid=4, stretch_len=1)
gracz1.penup()
gracz1.goto(-350, 0)

gracz2 = turtle.Turtle()
gracz2.speed(0)
gracz2.shape("square")
gracz2.color("white")
gracz2.shapesize(stretch_wid=4, stretch_len=1)
gracz2.penup()
gracz2.goto(350, 0)

#poilka
pilka = turtle.Turtle()
pilka.speed(10)
pilka.shape("circle")
pilka.color("white")
pilka.penup()
pilka.goto(0, 0)
pilka.dx = 8
pilka.dy = 8

#ruszanie postaci
def gracz1_gora():
    y = gracz1.ycor()
    y += 20
    gracz1.sety(y)

def gracz1_dol():
    y = gracz1.ycor()
    y -= 20
    gracz1.sety(y)

def gracz2_gora():
    y = gracz2.ycor()
    y += 20
    gracz2.sety(y)

def gracz2_dol():
    y = gracz2.ycor()
    y -= 20
    gracz2.sety(y)

#klawisze
okno.listen()
okno.onkeypress(gracz1_gora, "w")
okno.onkeypress(gracz1_dol, "s")
okno.onkeypress(gracz2_gora, "Up")
okno.onkeypress(gracz2_dol, "Down")

#petla
while True:
    okno.update()

    #ruchpilki
    pilka.setx(pilka.xcor() + pilka.dx)
    pilka.sety(pilka.ycor() + pilka.dy)

    #odbijanie pilki
    if pilka.ycor() > 190 or pilka.ycor() < -190:
        pilka.dy *= -1

    #odbicie od grajkow
    if (pilka.dx > 0) and (350 > pilka.xcor() > 340) and (gracz2.ycor() + 50 > pilka.ycor() > gracz2.ycor() - 50):
        pilka.color("blue")
        pilka.setx(340)
        pilka.dx *= -1

    elif (pilka.dx < 0) and (-350 < pilka.xcor() < -340) and (gracz1.ycor() + 50 > pilka.ycor() > gracz1.ycor() - 50):
        pilka.color("red")
        pilka.setx(-340)
        pilka.dx *= -1

#nie udalo sie zrobic petli do pilki zeby po kazdmym punkcie pilka na nowo sie pojawiala
