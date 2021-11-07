package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepository;
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class TaskController {
	
	@Autowired
	private TaskRepository taskRepository;
	
	// Get all tasks
	@GetMapping("/tasks")
	public List<Task> getAllTasks(){
		return taskRepository.findAll();
	}
	
	// Add task
	@PostMapping("/tasks")
	public Task createTask(@RequestBody Task ts) {
		return taskRepository.save(ts);
	}
	
	// Update Reminder
	@PutMapping("/tasks/{id}")
	public Task updateReminder(@PathVariable long id){
		Task ts = taskRepository.getById(id);
		ts.setReminder(ts.isReminder()?false:true);
		return taskRepository.save(ts);
		//return taskRepository.findAll();
	}
	
	// Delete task
	@DeleteMapping("/tasks/{id}")
	public void deleteTask(@PathVariable long id) {
		taskRepository.deleteById(id);
	}
	
}
