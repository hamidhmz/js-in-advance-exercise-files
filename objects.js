let students = {
    amelia: 20,
    beatrice: 22,
    cece: 20,
    deirdre: 19,
    eloise: 21
  };
  console.log(Object.keys(students));
  console.log(Object.assign(students));
  
  console.log(
    Object.defineProperty(students, "newPro", {
      value: 1,
      writable: true
    })
  );
  Object.defineProperty(students, "key", { value: 5 });
  console.log(students.key);
  console.log(Object.keys(students));
  console.log(students);
  console.log(Object.getOwnPropertyNames(students));
  /****************************************************************************************************
   * ENUMERABLE PROPERTIES ARE ONES THAT SHOW UP IN A FOR...IN LOOP. NON-ENUMERABLE PROPERTIES DON’T. *
   ****************************************************************************************************/
  /* -------------------------------------------------------------------------- */
  /*                          inheritance and prototype                         */
  /* -------------------------------------------------------------------------- */
  
  console.log(
    Object.create(
      {},
      {
        id: {
          value: 1,
          enumerable: true // writable:false, configurable(deletable):false by default
        },
        name: {
          value: "Bob",
          enumerable: true
        }
      }
    )
  );
  console.log(
    Object.create(students, {
      id: {
        value: 1,
        enumerable: true // writable:false, configurable(deletable):false by default
      },
      name: {
        value: "Bob",
        enumerable: true
      }
    })
  );
  const objNew = Object.create(
    {},
    {
      id: {
        value: 1,
        enumerable: true // writable:false, configurable(deletable):false by default
      },
      name: {
        value: "Bob",
        enumerable: true
      }
    }
  );
  console.log(Object.getOwnPropertyNames(students));
  console.log(objNew);
  
  objNew.__proto__ = students;
  console.log(objNew);
  console.log(objNew.amelia);
  
  const objNew2 = Object.create(students, {
    id: {
      value: 1,
      enumerable: true // writable:false, configurable(deletable):false by default
    },
    name: {
      value: "Bob",
      enumerable: true
    }
  });
  console.log(Object.getOwnPropertyNames(students));
  console.log(objNew2);
  
  // objNew2.__proto__ = students;
  console.log(objNew2);
  console.log(objNew2.amelia);
  
  /* -------------------------------------------------------------------------- */
  /*                             Accessor properties                            */
  /* -------------------------------------------------------------------------- */
  
  let user = {
    name: "John",
    surname: "Smith",
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  let admin = {
    __proto__: user,
    isAdmin: true
  };
  
  console.log(admin.fullName); // John Smith
  
  // setter triggers!
  admin.fullName = "Alice Cooper";
  
  console.log(admin.fullName);
  
  /***********************************************************************
   * NO MATTER WHERE THE METHOD IS FOUND: IN AN OBJECT OR ITS PROTOTYPE. *
   *     IN A METHOD CALL, THIS IS ALWAYS THE OBJECT BEFORE THE DOT.     *
   *  SO, THE SETTER CALL ADMIN.FULLNAME= USES ADMIN AS THIS, NOT USER.  *
   ***********************************************************************/
  
  // animal has methods
  let animal = {
    walk() {
      if (!this.isSleeping) {
        console.log(`I walk`);
      }
    },
    sleep() {
      this.isSleeping = true;
    }
  };
  
  let rabbit = {
    name: "White Rabbit",
    __proto__: animal
  };
  
  // modifies rabbit.isSleeping
  rabbit.sleep();
  
  console.log(rabbit.isSleeping); // true
  console.log(animal.isSleeping); // undefined (no such property in the prototype)
  
  /* -------------------------------------------------------------------------- */
  /*                                for prototype                               */
  /* -------------------------------------------------------------------------- */
  
  /************************************************************
   * THE FOR..IN LOOP ITERATES OVER INHERITED PROPERTIES TOO. *
   ************************************************************/
  
  let animal1 = {
    eats: true,
    noise: true
  };
  
  let rabbit1 = {
    jumps: true,
    __proto__: animal1
  };
  
  // Object.keys only returns own keys
  console.log(Object.keys(rabbit1)); // jumps
  
  // for..in loops over both own and inherited keys
  for (let prop in rabbit1) console.log(prop); // jumps, then eats
  
  /* --------------------------- we can exclude them -------------------------- */
  
  for (let prop in rabbit1) {
    let isOwn = rabbit1.hasOwnProperty(prop);
  
    if (isOwn) {
      console.log(`Our: ${prop}`); // Our: jumps
    } else {
      console.log(`Inherited: ${prop}`); // Inherited: eats
    }
  }
  console.log(Object.getOwnPropertyNames(rabbit1));
  console.log(Object.getPrototypeOf(rabbit1));
  
  /* -------------------------------------------------------------------------- */
  /*                   we have 2 other methods for inheritance                  */
  /* -------------------------------------------------------------------------- */
  
  /*************************
   * OBJECT.GETPROTOTYPEOF *
   * OBJECT.SETPROTOTYPEOF *
   *************************/
  
  function myFactory() {
      this.p2 = 2;
      this.p3 = 3;
  }
  myFactory.prototype = { p1: 10 };
  
  const test1 = new myFactory()