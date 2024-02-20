exports.getAllUsers = (req, res) => {
    const db = req.db;
    db.query('SELECT * FROM user', (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error retrieving users');
      } else {
        res.status(200).json(results);
      }
    });
  };
  
  exports.getUserById = (req, res) => {
    const db = req.db;
    const userId = req.params.id;
  
    db.query('SELECT * FROM user WHERE id = ?', [userId], (err, results) => {
      if (err) {
        console.error('Error retrieving user:', err);
        res.status(500).json({ error: 'Error retrieving user' });
      } else {
        if (results.length === 0) {
          res.status(404).json({ error: 'User not found' });
        } else {
          res.status(200).json(results[0]);
        }
      }
    });
  };
  
  exports.createUser = (req, res) => {
    const db = req.db;
    const { name, water, step, sleep } = req.body;
  
    const sql = 'INSERT INTO user (name, water, step, sleep) VALUES (?, ?, ?, ?)';
    const values = [name, water, step, sleep];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ error: 'Error creating user' });
      } else {
        console.log('User created successfully');
        res.status(201).json({ id: result.insertId, name, water, step, sleep });
      }
    });
  };

  exports.updateUserById = (req, res) => {
    const db = req.db;
    const userId = req.params.id;
    const { name, water, step, sleep } = req.body;
  
    const sql = 'UPDATE user SET name = ?, water = ?, step = ?, sleep = ? WHERE id = ?';
    const values = [name, water, step, sleep, userId];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error updating user:', err);
        res.status(500).json({ error: 'Error updating user' });
      } else {
        if (result.affectedRows === 0) {
          res.status(404).json({ error: 'User not found' });
        } else {
          console.log('User updated successfully');
          res.status(200).json({ id: userId, name, water, step, sleep });
        }
      }
    });
  };

  exports.deleteUserById = (req, res) => {
    const db = req.db;
    const userId = req.params.id;
  
    const sql = 'DELETE FROM user WHERE id = ?';
    const values = [userId];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error deleting user:', err);
        res.status(500).json({ error: 'Error deleting user' });
      } else {
        if (result.affectedRows === 0) {
          res.status(404).json({ error: 'User not found' });
        } else {
          console.log('User deleted successfully');
          res.status(204).send(); 
        }
      }
    });
  };
  