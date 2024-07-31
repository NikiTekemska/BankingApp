package com.bankigapp.server.model;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import jakarta.persistence.*;

@Entity
@Table(name = "clients")
public class Client {
    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getSecondName() {
        return secondName;
    }

    public String getFamilyName() {
        return familyName;
    }

    public String getIdCardNumber() {
        return idCardNumber;
    }

    public String getAddress() {
        return address;
    }

    public String getBulgarianEgn() {
        return bulgarianEgn;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public void setId(Long id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public void setFamilyName(String familyName) {
        this.familyName = familyName;
    }

    public void setIdCardNumber(String idCardNumber) {
        this.idCardNumber = idCardNumber;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setBulgarianEgn(String bulgarianEgn) {
        this.bulgarianEgn = bulgarianEgn;
    }

    @JsonProperty("firstName")
    private String firstName;

    @JsonProperty("secondName")
    private String secondName;
    @JsonProperty("familyName")
    private String familyName;
    @JsonProperty("idCardNumber")
    private String idCardNumber;
    @JsonProperty("address")
    private String address;
    @JsonProperty("bulgarianEgn")
    private String bulgarianEgn;

    public Client(Long id, String firstName, String secondName, String familyName, String idCardNumber, String address, String bulgarianEgn) {
        this.id = id;
        this.firstName = firstName;
        this.secondName = secondName;
        this.familyName = familyName;
        this.idCardNumber = idCardNumber;
        this.address = address;
        this.bulgarianEgn = bulgarianEgn;
    }

    public Client(String firstName, String secondName, String familyName, String idCardNumber, String address, String bulgarianEgn) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.familyName = familyName;
        this.idCardNumber = idCardNumber;
        this.address = address;
        this.bulgarianEgn = bulgarianEgn;
    }

    public Client(){

    }

    @Override
    public String toString() {
        return "Client{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", secondName='" + secondName + '\'' +
                ", familyName='" + familyName + '\'' +
                ", idCardNumber='" + idCardNumber + '\'' +
                ", address='" + address + '\'' +
                ", bulgarianEgn='" + bulgarianEgn + '\'' +
                '}';
    }

}

