estimatePI
=========
___

estimatePI is a monte carlo simulation which takes random sample to obtain a approximation of pi.



Assume a circle of radius R is inscribed inside a square with side length 2R, then the area of the circle will be pi*R^2 and the area of the square will be (2R)^2. So the ratio of the area of the circle to the area of the square will be pi/4.

This means that, if you pick N points at random inside the square, approximately N*pi/4 of those points should fall inside the circle.

This program picks points at random inside the square. It then checks to see if the point is inside the circle (it knows it's inside the circle if x^2 + y^2 < R^2, where x and y are the coordinates of the point and R is the radius of the circle). The program keeps track of how many points it's picked so far (N) and how many of those points fell inside the circle (M).

Pi is then approximated as follows:

pi = 4*M / N

Frontend
-----------
___

The frontend is an interface between the user and the backend.  The frontend  abstracts the underlying component by providing a user-friendly interface. Frontend (or "client") side is any component manipulated by the user.

Estimate frontend uses:

* [Angular] - AngularJS is a toolset for building the framework most suited to your application development.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [Chart.js] -Simple, clean and engaging charts for designers and developers
* [jQuery] - duh 



Backend
-----------
___

The backend is an part of the application that is never visible to the user. The backend provides the core logic  and core computation for the application. The backend creates components and features that are  accessed by a user through a front-end application.

Estimate backend uses:

* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework

Installation
--------------
___



```sh
git clone https://github.com/jharri34/estimate-pi.git
cd estimate-pi
npm install 
cd frontend && bower install && cd ../
node backend/index.js

```


License
----
___


MIT



[Chart.js]:https://github.com/chjj/marked
[node.js]:http://nodejs.org
[Twitter Bootstrap]:http://twitter.github.com/bootstrap/
[Angular]:https://github.com/madrobby/keymaster
[jQuery]:http://jquery.com
[express]:http://expressjs.com
