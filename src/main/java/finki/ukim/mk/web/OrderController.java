package finki.ukim.mk.web;

import finki.ukim.mk.service.EmailService;
import finki.ukim.mk.service.JournalLogger;
import finki.ukim.mk.model.Order;
import finki.ukim.mk.repository.OrderRepository;
import finki.ukim.mk.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("order")
public class OrderController {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    EmailService emailService;

    @Autowired
    JournalLogger journalLogger;

    @PostMapping
    public ResponseEntity<Order> makeOrder(@RequestBody Order order1){
        Order order = orderRepository.save(order1);
        emailService.sendMail(order, productRepository.findById(order.getProductId()).get());
        journalLogger.logOrderMade(order);
        return new ResponseEntity<>(order1, HttpStatus.CREATED);
    }
}
