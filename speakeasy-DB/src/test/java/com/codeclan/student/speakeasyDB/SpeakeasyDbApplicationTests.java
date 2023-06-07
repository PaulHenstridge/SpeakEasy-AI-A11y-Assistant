package com.codeclan.student.speakeasyDB;

import com.codeclan.student.speakeasyDB.models.Memo;
import com.codeclan.student.speakeasyDB.repositories.MemoRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SpeakeasyDbApplicationTests {

	@Autowired
	MemoRepository memoRepository;

	@Test
	void contextLoads() {
	}

	@Test
	void canAddMemo(){
		Memo newMemo = new Memo("11 June", "Celebrate...");
		memoRepository.save(newMemo);



	}

}
