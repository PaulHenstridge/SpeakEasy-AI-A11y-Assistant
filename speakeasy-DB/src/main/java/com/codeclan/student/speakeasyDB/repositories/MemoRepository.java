package com.codeclan.student.speakeasyDB.repositories;

import com.codeclan.student.speakeasyDB.models.Memo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemoRepository extends JpaRepository<Memo, Long> {
}
