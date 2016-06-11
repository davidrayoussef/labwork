

// REVEALING MODULE PATTERN

var myRevealingModule = (function() {
	
	var name = 'John Smith';

	var age = 40;

	function updatePerson() {
		name = 'John Smith Updated';
	}
	function setPerson() {
		name = 'John Smith Set';
	}
	function getPerson() {
		return name;
	}
	return {
		// which of your functions and variables may be accessed publicly
		get: getPerson,
		set: setPerson
	}
})();

myRevealingModule.get();



// OBSERVER PATTERN

var pubsub = {};

(function( q ) {
	
	var topics = {};
	var subUid = -1;

	q.publish = function(topic, args) {
		if(!topics[topic]) {
		    return false;
		}

		var subscribers = topics[topic];
		var len = subscribers ? subscribers.length : 0;

		while(len--) {
			subscribers[len].func(topic, args);
		}

		return this;
		
	};

	q.subscribe = function(topic, func) {
		if(!topics[topic]) {
		    topics[topic] = [];
		}

		var token = (++subUid).toString();
		topics[topic].push({
			token: token,
			func: func
		});
		return token;
	};

	q.unsubscribe = function(token) {
		Object.keys(topics).map(function(m) {
			if(topics[m]) {
			    for (var i = 0, j = topics[m].length; i < j; i++) {
			    	if(topics[m][i].token == token) {
			    	    topics[m].splice(i, 1);
			    	    return token;
			    	}
			    }
			}
		})
		return this;
	};
})( pubsub );

// implementation

var testHandler = function(topics, data) {
	console.log(topics + ': ' + data);
};

// Subscribers "subscribe" (or listen) and once they've been notified their callback functions are invoked
var testSubscription = pubsub.subscribe('example1', testHandler);

pubsub.publish('example1', 'hello world');
pubsub.publish('example1', ['test', 'a', 'b', 'c', 'd']);
pubsub.publish('example1', [{
	'color': 'blue'
}, {
	'text': 'hello'}
]);

pubsub.unsubscribe(testSubscription);



// MEDIATOR PATTERN (AND PUBSUB)

var mediator = (function() {
	var channels = {};

	var subscribe = function(channel, fn) {
		if(!channels[channel]) { channels[channel] = []; }
		channels[channel].push({ context: this, callback: fn });
		return this;
	};

	var publish = function(channel) {
		if(!channels[channel]) { return false; }
		var args = Array.prototype.slice.call(arguments, 1);

		for (var i = 0; i < channels[channel].length; i++) {
			var subscription = channels[channel][i];
			subscription.callback.apply(subscription.context, args);
		}
		return this;
	};

	return {
		subscribe: subscribe,
		publish: publish,
		installTo: function(obj) {
			obj.subscribe = subscribe;
			obj.publish = publish;
		}

	};

})();

// implementation

(function( m ) {
	var person = 'Luke';

  // Subscribe to a topic/event called 'nameChange' with a callback function which will log the orig name and then new name
  m.subscribe('nameChange', function(arg) {
  	console.log( 'Person was: ' + person );
  	person = arg;
    console.log( 'Person is now: ' + person );
});

  m.publish('nameChange', 'David');

})( mediator );



// DECORATOR PATTERN

function MacBook() {
	this.cost = function() { return 997; };
	this.screenSize = function() { return 13.3 };
}

// Decorator 1
function Memory(macbook) {
	var v = macbook.cost();
	macbook.cost = function() {
		return v + 75;
	};
}

// Decorator 2
function Engraving(macbook) {
	var v = macbook.cost();
	macbook.cost = function() {
		return v + 200;
	};
}

// Decorator 3
function Insurance(macbook) {
	var v = macbook.cost();
	macbook.cost = function() {
		return v + 250;
	};
}

var mb = new MacBook();
Memory(mb);
Engraving(mb);
Insurance(mb);



// ADAPTER PATTERN
// Adapts a complex interface to a simple class and abstracts away details

function Ship() {
	this.setRudderAngleTo = function(angle) {};
	this.setSailConfiguration = function(config) {};
	this.setSailAngle = function(sailId, sailAngle) {};
	this.getCurrentBearing = function() {};
	this.getCurrentSpeedEstimate = function() {};
	this.shiftCrewWeightTo = function(weight, locationId) {};
}

var ShipAdapter = (function() {
	function ShipAdapter() {
		this._ship = new Ship();
	}
	ShipAdapter.prototype.TurnLeft = function() {
		this._ship.SetRudderAngleTo(-30);
		this._ship.SetSailAngle(3, 12);
	};
	ShipAdapter.prototype.TurnRight = function() {
		this._ship.SetRudderAngleTo(30);
		this._ship.SetSailAngle(5, -9);
	};
	ShipAdapter.prototype.GoForward = function() {
		//do something else to the _ship
	};
	return ShipAdapter;
})();

var ship = new ShipAdapter();
ship.GoForward();
ship.TurnLeft();



// MEMENTO PATTERN
// Provides an approach to restore the state of objects to a previous state. // i.e., Undo

var Person = function(name, street, city, state) {
	this.name = name;
	this.street = street;
	this.city = city;
	this.state = state;
}

Person.prototype = {
	hydrate: function() {
		var memento = JSON.stringify(this);
		return memento;
	},
	dehydrate: function(memento) {
		var m = JSON.parse(memento);
		this.name = m.name;
		this.street = m.street;
		this.city = m.city;
		this.state = m.state;
	}
}

var CareTaker = function() {
	this.memento = {};

	this.add = function(key, memento) {
		this.memento[key] = memento;
	};

	this.get = function(key) {
		return this.memento[key];
	}
}

var mike = new Person("Mike Foley", "1112 Main", "Dallas", "TX");
var john = new Person("John Wang", "48th Street", "San Jose", "CA");
var caretaker = new CareTaker();
 
// save state

caretaker.add(1, mike.hydrate());
caretaker.add(2, john.hydrate());

// mess up their names

mike.name = "King Kong";
john.name = "Superman";

mike.name;
john.name;

// restore original state

mike.dehydrate(caretaker.get(1));
john.dehydrate(caretaker.get(2));

mike.name;
john.name;



// STATE MACHINES PATTERN // used to avoid lots of confusing if statements ... if (this && that && that && that) 

// state manager

var BankAccountManager = (function() {
	function BankAccountManager() {
		this.currentState = new GoodStandingState(this);
	}
	BankAccountManager.prototype.desposit = function(amount) {
		this.currentState.deposit(amount);
	};
	BankAccountManager.prototype.withdraw = function(amount) {
		this.currentState.withdraw(amount);
	};
	BankAccountManager.prototype.addToBalance = function(amount) {
		this.balance += amount;
	};
	BankAccountManager.prototype.getBalance = function() {
		return this.balance;
	};
	BankAccountManager.prototype.moveToState = function(newState) {
		this.currentState = newState;
	};
	return BankAccountManager;
})();

// three states - goodstanding, overdrawn and onhold

var GoodStandingState = (function() {
	function GoodStandingState(manager) {
		this.manager = manager;
	}
	GoodStandingState.prototype.desposit = function(amount) {
		this.manager.addToBalance(amount);
	};
	GoodStandingState.prototype.withdraw = function(amount) {
		if(this.manager.getBalance() < amount) {
		    this.manager.moveToState(new OverdrawnState(this.manager));
		}
		this.manager.addToBalance(-1 * amount);
	};
	return GoodStandingState;
})();

var OverdrawnState = (function() {
	function OverdrawnState(manager) {
		this.manager = manager;
	}
	OverdrawnState.prototype.deposit = function(amount) {
		this.manager.addToBalance(amount);
		if(this.manager.getBalance() > 0) {
		    this.manager.moveToState(new GoodStandingState(this.manager));
		}
		
	};
	OverdrawnState.prototype.withdraw = function(amount) {
		this.manager.moveToState(new OnHoldState(this.manager));
		throw 'Cannot withdraw money from an already overdrawn bank account';
	};
	return OverdrawnState;
})();

var OnHoldState = (function() {
	function OnHoldState(manager) {
		this.manager = manager;
	}
	OnHoldState.prototype.deposit = function(amount) {
		this.manager.addToBalance(amount);
		throw 'Your account is on hold and you must go to the bank to resolve the issue';
	};
	OnHoldState.prototype.withdraw = function(amount) {
		throw 'Your account is on hold and you must go to the bank to resolve the issue';
	};
	return OnHoldState;
})();



// MVC PATTERN

var CreateVideoView = (function() {
	function CreateVideoView(document, controller, model, validationResult) {
		this.document = document;
		this.controller = controller;
		this.model = model;
		this.validationResult = validationResult;
		var _this = this;
		this.document.getElementById('uploadButton').addEventListener('click', function() {
			return _this.saveVideo();
		});
		this.document.getElementById('videoName').value = model.name;
		this.document.getElementById('videoCaption').value = model.description;
		this.document.getElementById('videoLength').value = model.length;
	}

	CreateVideoView.prototype.saveVideo = function() {
		var data = {
			name: this.document.getElementById('videoName').value;
			description: this.document.getElementById('videoCaption').value;
			length: this.document.getElementById('videoLength').value;
		};
		this.controller.saveVideo(data);
	};
	return CreateVideoView;
})();
	

var Controller = (function() {
	function Controller(document) {
		this.document = document;
	}

	Controller.prototype.createVideo = function() {
		this.setView(new CreateVideoView(this.document, this));
	};

	Controller.prototype.saveVideo = function(data) {
		var validationResult = this.validate(data);
		if(validationResult.IsValid) {
		    // save to storage
		    this.saveVideoSuccess(data);
		}
		else {
			this.setView(new CreateVideoView(this.document, this, data, validationResult));
		}
	};

	Controller.prototype.saveVideoSuccess = function(data) {
		this.setView(new CreateVideoSuccess(this.document, this, data));
	};

	Controller.prototype.setView = function(view) {
		// instructs browser to set given view to current one probably through use of template
	};

	Controller.prototype.validate = function(model) {
		var validationResult = new validationResult();
		if(!model.name || model.name === '') {
		    validationResult.IsValid = false;
		    validationResult.Errors.push('Name is required');
		}
		return;
	};
	return Controller;
})();

var Model = (function() {
	function Model(name, description, length) {
		this.name = name;
		this.description = description;
		this.length = length;
	}
	return Model;
})();



// MVC PATTERN FOR A list (old code)

/**
 * The Model. Model stores items and notifies
 * observers about changes.
 */
 
function ListModel(items) {
	this.items = items;
	this.selectedindex = -1;

	this.itemAdded = new Event(this);
	this.itemRemoved = new Event(this);
	this.selectedIndexChanged = new Event(this);
}

ListModel.prototype = {
	getItems: function() {
		return [].concat(this.items);
	},
	addItem: function(item) {
		this.items.push(item);
		this.itemAdded.notify({ item: item });
	},
	removeItemAt: function(index) {
		var item = this.items[index];
		this.items.splice(index, 1);
		this.itemRemoved.notify({ item: item });
		if(index === this.selectedIndex) {
		    this.setSelectedIndex(-1);
		}
	},
	getSelectedIndex: function() {
		return this.selectedIndex;
	},
	setSelectedIndex: function(index) {
		var previousIndex = this.selectedIndex;
		this.selectedIndex = index;
		this.selectedIndexChanged = new Event({ previous: previousIndex });
	}
};

function Event(sender) {
	this.sender = sender;
	this.listeners = [];
}

Event.prototype = {
	attach: function(listener) {
		this.listeners.push(listener);
	},
	notify: function(args) {
		for (var i = 0; i < this.listeners.length; i++) {
			this.listeners[i](this.sender, args);
		}
	}
};

/**
 * The View. View presents the model and provides
 * the UI events. The controller is attached to these
 * events to handle the user interraction.
 */

 function ListView(model, elements) {
 	this.model = model;
 	this.elements = elements;

 	this.listModified = new Event(this);
 	this.addButtonClicked = new Event(this);
 	this.delButtonClicked = new Event(this);

 	var self = this;

 	// attach model listeners

 	this.model.itemAdded.attach(function() {
 		self.rebuildList();
 	});

 	this.model.itemRemoved.attach(function() {
 		self.rebuildList();
 	});

 	// attach listeners to HTML controls

 	this.elements.list.change(function(e) {
 		self.listModified.notify({ index: e.target.selectedIndex });
 	});
 	this.elements.addButton.click(function() {
 		self.addButtonClicked.notify();
 	});
 	this.elements.delButton.click(function() {
 		self.delButtonClicked.notify();
 	});
 }

ListView.prototype = {
	show: function() {
		this.rebuildList();
	},

	rebuildList: function() {
		var key;

		var list = this.elements.list;
		list.html('');

		var items = this.model.getItems();
		for(key in items) {
			if(items.hasOwnProperty(key)) {
			    list.append($('<option>' + items[key] + '</option>'));
			}
		}
		this.model.setSelectedIndesx(-1);
	}
};

/**
 * The Controller. Controller responds to user actions and
 * invokes changes on the model.
 */

 function ListController(model, view) {
 	this.model = model;
 	this.view = view;

 	var self = this;

 	this.view.listModified.attach(function(sender, args) {
 		self.updateSelected(args.index)
 	});

 	this.view.addButtonClicked.attach(function() {
 		self.addItem();
 	});

 	this.view.delButtonClicked.attach(function() {
 		self.delItem();
 	});
 }

 ListController.prototype = {
 	addItem: function() {
 		var item = window.prompt('Add item:', '');
 		if(item) {
 		    this.model.addItem(item);
 		}
 	},
 	delItem: function() {
 		var index = this.model.getSelectedIndex();
 		if(index !== -1) {
 		    this.model.removeItemAt(this.model.getSelectedIndex());
 		}
 	},
 	updateSelected: function(index) {
 		this.model.setSelectedIndex(index);
 	}
};

// Instantiate and configure
$(function() {
	var model = new ListModel(['PHP', 'Javascript', 'Ruby', 'Python', 'Java']);
	var view = new ListView(model, {
		'list': $('#list'),
		'addButton': $('#plusBtn'),
		'delButton': $('#minusBtn')
	});
	var controller = new ListController(model, view);

	view.show();
});



// MODEL VIEW PRESENTER PATTERN

/*
The main goal with MVP is decoupling of different aspects in the code. Normally, in JavaScript, there are 3 major such aspects:

1. Event Handling
2. DOM manipulation
3. Server communication (AJAX calls)

For each of these concerns, there's a corresponding term from MVP:

1. EventHandling = Presenter
2. DOM Manipulation = View
3. AJAX calls = Model
*/



// MODEL VIEW VIEW-MODEL




// OBJECT.OBSERVE FOR ECMASCRIPT 7 WILL REPLACE MOST LOGIC USED IN MV*

var model = {};

Object.observe(model, function(changes) {
	changes.forEach(function(change) {
		if(change.type=='add') { console.log(change.name + ' ' + change.type + 'ed'); }
		else { console.log(change.name + ' ' + change.type + 'd'); }
		if(change.type=='update') {
		    console.log('  Old value was ' + change.oldValue);
		}
	});
});

model.item = 7;
model.item = 8;
delete model.item;