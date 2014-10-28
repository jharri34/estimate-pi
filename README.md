estimatePI
=========
estimatePI is a monte carlo simulation which takes random samples to obtain a approximation of pi.



Assume a circle of radius R is inscribed inside a square with side length 2R, then the area of the circle will be pi*R^2 and the area of the square will be (2R)^2. So the ratio of the area of the circle to the area of the square will be pi/4.

This means that, if you pick N points at random inside the square, approximately N*pi/4 of those points should fall inside the circle.

This program picks points at random inside the square. It then checks to see if the point is inside the circle (it knows it's inside the circle if x^2 + y^2 < R^2, where x and y are the coordinates of the point and R is the radius of the circle). The program keeps track of how many points it's picked so far (N) and how many of those points fell inside the circle (M).

Pi is then approximated as follows:

pi = 4*M / N

###experiment #1: n = 100
approximation = 3.139039999999993


standard deviation =0.16266492676665165

###experiment #2 n = 1000
approximation = 3.138731999999998


standard deviation =0.05052880540840045

### experiment #3 n = 10000
approximation = 3.141386800000004


standard deviation =0.016880051710821277

Frontend
-----------

The frontend is an interface between the user and the backend.  The frontend  abstracts the underlying component by providing a user-friendly interface. Frontend (or "client") side is any component manipulated by the user.

Estimate frontend uses:

* [Angular] - AngularJS is a toolset for building the framework most suited to your application development.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [Chart.js] -Simple, clean and engaging charts for designers and developers




Backend
-----------

The backend is an part of the application that is never visible to the user. The backend provides the core logic  and core computation for the application. The backend creates components and features that are  accessed by a user through a front-end application.

Estimate backend uses:

* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework

Installation
--------------



```sh
git clone https://github.com/jharri34/estimate-pi.git
cd estimate-pi
npm install 
cd frontend && bower install && cd ../
node backend/index.js

```


License
----

The MIT License

Copyright (c) 2010-2014 Google, Inc. http://angularjs.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



[Chart.js]:https://github.com/chjj/marked
[node.js]:http://nodejs.org
[Twitter Bootstrap]:http://twitter.github.com/bootstrap/
[Angular]:https://github.com/madrobby/keymaster
[express]:http://expressjs.com
