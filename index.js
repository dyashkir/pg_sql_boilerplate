var  _ = require('underscore')


function make_update (db, table_name, id_field){
  return function(id, update_obj, next){
    var fields =  _.sortBy(_.pairs(update_obj), function(a){
      return a[0];
    }); //sort to avoid duplicate named querries

    var set_pairs = _.map(fields, function(val, i){
      var key = val[0];
      return key + '=$' + (i + 1);
    }).join(',');

    var text = 'update ' + table_name + ' set ' + set_pairs + ' where ' + id_field + '=' + id;
    var query = { name : table_name + '_update_' + _.keys(update_obj).join('_'),
      text : text};

    var ar_list = _.map(fields, function(a){
      return a[1];
    });

    db.query(query, ar_list, next);
  }
}

exports.make_update = make_update;
