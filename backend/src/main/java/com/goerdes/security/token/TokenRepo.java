package com.goerdes.security.token;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TokenRepo extends JpaRepository<Token, Integer> {

  @Query(value = """
      select t from Token t inner join UserEntity u\s
      on t.userEntity.id = u.id\s
      where u.id = :id and (t.expired = false or t.revoked = false)\s
      """)
  List<Token> findAllValidTokenByUser(Integer id);

  Optional<Token> findByToken(String token);

  boolean existsByTokenAndRevoked(String refreshToken, boolean revoked);
}
