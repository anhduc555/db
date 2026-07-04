# Question 62 and 69 Update Summary

## Question 62

*   **Question ID**: 62
*   **Previous Answer**: Option A (Index 0)
*   **Updated Answer**: Option C (Index 2)
*   **Explanation Rewritten**: Yes
*   **Reason for Change**: To find a student enrolled in at least 2 different courses during the same semester, the relational algebra expression requires a self-join on the `ENROLL` table where `E1.SID = E2.SID` AND `E1.CID ≠ E2.CID`. The previous answer (Option A) erroneously used `E1.CID = E2.CID`, which merely joins a course record to itself. Option C expresses the correct logic. The explanation was updated to explicitly point to Option C and detail the self-join logic.
*   **Confidence Level**: High (100%)

---

## Question 69

*   **Question ID**: 69
*   **Previous Answer**: Option C (Index 2)
*   **Updated Answer**: Option D (Index 3)
*   **Explanation Rewritten**: Yes
*   **Reason for Change**: The question asks to compare two SQL queries (`NOT IN` vs `NOT EXISTS`) attempting to find students who haven't taken a specific course. The previous explanation incorrectly claimed that Query 1 would return fewer rows by citing the SQL `NULL` edge case. However, in standard relational database schema design, `MaSV` acts as a primary/foreign key component in the `KetQua` table and therefore cannot be `NULL`. Under this constraint, both queries are logically equivalent and will return the exact same result set. The answer was updated to Option D, and the explanation was entirely rewritten to explain the relationship between `NOT IN`, `NOT EXISTS`, and `NULL` values in the context of entity integrity.
*   **Confidence Level**: High (100%)
