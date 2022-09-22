package finki.ukim.mk.service;

import finki.ukim.mk.model.Product;
import finki.ukim.mk.repository.ProductAttributeRepository;
import finki.ukim.mk.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
public class TransactionService {

    @Autowired
    ProductAttributeRepository productAttributeRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    JournalLogger journalLogger;

    @Transactional
    public void saveProduct(Product newProduct, MultipartFile[] multipartFiles, String attributes){

        Product product = productRepository.save(newProduct);
        ImageService.saveImages(multipartFiles, product.getId(), product.getName());
        productAttributeRepository.saveAll(StringParser.parseProductAttributes(newProduct.getId(), attributes));
        journalLogger.logProductAdd(product);
    }
}
