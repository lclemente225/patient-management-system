//login
/*
    1. set HTTP cookie in here
    2. send JWT with cookie in payload
    3. Clientside: obtain cookie and start session

    a sample code
    router.get('/login', function(req, res) {
        res.render('login', { message: req.flash('error') });
    });

    // POST: /sessions/login
    router.post('/login',
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/sessions/login',
            failureFlash: true 
        })
        , function(req, res) {
            req.session.save(function (err) {
                if (err) {
                return next(err);
                }

                res.redirect('/');
        });
    });
*/

//logout
/*
// POST: /sessions/logout
router.get('/logout', function(req, res) {
  req.logout();
  req.session.save(function (err) {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.redirect('/sessions/login');
  });
});

*/