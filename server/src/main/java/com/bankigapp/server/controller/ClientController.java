package com.bankigapp.server.controller;

import com.bankigapp.server.model.Client;
import com.bankigapp.server.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

    @RestController
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/clients")
    public class ClientController {

        @Autowired
        private ClientService clientService;

        @GetMapping
        public List<Client> getClients() {
            return clientService.findAll();
        }

        @PostMapping
        public Client createClient(@RequestBody Client client) {
            return clientService.save(client);
        }

        @DeleteMapping("/{id}")
        public void deleteClient(@PathVariable Long id) {
            clientService.deleteById(id);
        }
    }

