# streetmix-router


This is a quick-and-dirty project that implements a simple HTTP proxy for the [Streetmix](http://streetmix.net/) project. It uses Node.js's [request library](https://github.com/mikeal/request) and [streams functionality](http://nodejs.org/api/stream.html). It is meant for deployment on a PaaS provider such as [Heroku](https://www.heroku.com/).

In the longer run, this project may go away and be replaced by something like [Apache Traffic Server](http://trafficserver.apache.org/) running on an [Amazon Web Services](http://aws.amazon.com/) [EC2](http://www.amazon.com/ec2/) instance.


## How it works

     O
    -+-                 +---------------+                +--------------------------------+ 
     | --- Request ---> | streetmix.net | --- CNAME ---> | streetmix-router.herokuapp.com | 
     ^                  +---------------+                +--------------------------------+
    / \                                                                  |
                                                                     HTTP PROXY
                                                                         |
                                                             +-----------+-----------+
                                                             |                       |
                                                         no bucket               bucket = 2
                                                           cookie                  cookie
                                                             |                       |
                                                             v                       v
                                          +---------------------------+     +----------------------------+
                                          |  streetmix.herokuapp.com  |     | streetmix-v2.herokuapp.com |
                                          +---------------------------+     +----------------------------+
    