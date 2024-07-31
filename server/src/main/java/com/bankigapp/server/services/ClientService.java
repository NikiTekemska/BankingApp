package com.bankigapp.server.services;

import com.bankigapp.server.model.Client;
import com.bankigapp.server.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

    public List<Client> findAll() {
        List<Client> clients = clientRepository.findAll();
        System.out.println("Fetched clients: " + clients);
        return clients;
    }

    public Client findById(Long id){
        return clientRepository
                .findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid id: " + id));
    }
    public Client save(Client client) {
        // TODO save validations
        return clientRepository.save(client);
    }

    public void deleteById(Long id) {
        boolean exists = clientRepository.existsById(id);
        if(exists) {
            clientRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("Invalid Id provided");
        }
    }
}
