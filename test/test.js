var pg_sql_boilerplate = require('../index')


pg_sql_boilerplate.make_update({
  query : function(q, ar, next){
            console.dir(q);
            console.dir(ar);
            next(null, {});
          }
}, 'users', 'id')(2, {name : 'aaaaa', description : 'fffffffffff'}, console.log)

pg_sql_boilerplate.make_update({
  query : function(q, ar, next){
            console.dir(q);
            console.dir(ar);
            next(null, {});
          }
}, 'users', 'id')(2, {description : 'fffffffffff', name : 'aaaaa'}, console.log)
