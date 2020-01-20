const passport = require('passport');
const GithubStrategy = require('passport-github');
const User = require('../models/usershema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const githubID = process.env.GITHUB_ID;
//GithubStrategy.passReqToCallback = true;



