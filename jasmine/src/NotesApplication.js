"use strict";

function NotesApplication(author){
  this.author = author;
	this.notes = [];

  this.create = function(note_content){
		this.notes.push(note_content);
	};

  this.get = function(note_id){
		if(note_id >= 0 && note_id < this.notes.length)
		{
			return this.notes[note_id]+"\n";
		}
		else
		{
			return "No such entry!\n";
		}
	};

  this.delete = function(note_id){
    if(note_id >= 0 && note_id < this.notes.length)
    {
      this.notes.splice(note_id,1);
    }
  };

}
