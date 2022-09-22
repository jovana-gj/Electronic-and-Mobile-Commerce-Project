package finki.ukim.mk.repository;

import finki.ukim.mk.model.ProductAttribute;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductAttributeRepository extends CrudRepository<ProductAttribute, Integer> {

    @Query(value = "SELECT * FROM product_attributes WHERE product_id = ?1 ORDER BY id", nativeQuery = true)
    List<ProductAttribute> findAllByProductId(int productId);
}
