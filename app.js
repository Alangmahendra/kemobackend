const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

require('dotenv').config()
mongoose.connect('mongodb://localhost/kemodijakarta')

const Admin = require('./routes/admin')
const User = require('./routes/users')
const Agama = require('./routes/Agama')
const Akomodasi = require('./routes/Akomodasi')
const Aliran = require('./routes/Aliran')
const Homestay = require('./routes/Homestay')
const Rumahsakit = require('./routes/Rumahsakit')
const Schedule = require('./routes/Schedule')
const BukuTamu = require('./routes/BukuTamu')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
cors({credentials: true, origin: true})

app.use('/api/admin', Admin);
app.use('/api/user', User);
app.use('/api/agama', Agama);
app.use('/api/akomodasi', Akomodasi);
app.use('/api/aliran', Aliran);
app.use('/api/homestay', Homestay);
app.use('/api/rumahsakit', Rumahsakit);
app.use('/api/schedule', Schedule);
app.use('/api/bukutamu', BukuTamu);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
