const RAW_QUESTIONS = [
  {
    "question": "Câu 1. Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, Quy định áp dụng đối với đối tượng nào?",
    "options": [
      "A. Các cơ quan nhà nước, tổ chức chính trị xã hội",
      "B. Các tổ chức đảng và cán bộ, đảng viên trong Đảng",
      "C. Các tổ chức chính trị - xã hội và toàn thể Nhân dân",
      "D. Các đoàn thể và toàn thể quần chúng"
    ],
    "answer": 1
  },
  {
    "question": "Câu 2. Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, mục đích quan trọng của công tác chính trị, tư tưởng là gì?",
    "options": [
      "A. Nâng cao chất lượng cán bộ đáp ứng yêu cầu nhiệm vụ",
      "B. Giữ vững định hướng chính trị, tư tưởng",
      "C. Mở rộng hoạt động đối ngoại",
      "D. Tăng cường công tác hành chính trong Đảng"
    ],
    "answer": 1
  },
  {
    "question": "Câu 3. Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, công tác chính trị, tư tưởng được xác định là gì?",
    "options": [
      "A. Nhiệm vụ thường xuyên, gắn liền với hoạt động của tổ chức đảng",
      "B. Nhiệm vụ quan trọng hàng đầu trong công tác xây dựng Đảng",
      "C. Nhiệm vụ của cơ quan tuyên giáo các cấp",
      "D. Nhiệm vụ của các cấp ủy và từng đảng viên"
    ],
    "answer": 1
  },
  {
    "question": "Câu 4. Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, trong mối quan hệ giữa “xây” và “chống”, nội dung nào được xác định là nhiệm vụ cơ bản, chiến lược, lâu dài?",
    "options": [
      "A. “Xây”",
      "B. “Chống”",
      "C. Cả hai như nhau",
      "D. Tùy từng thời điểm"
    ],
    "answer": 0
  },
  {
    "question": "Câu 5. Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, công tác chính trị, tư tưởng phải lấy nội dung nào làm định hướng hành động?",
    "options": [
      "A. “2 kiên định”",
      "B. “4 kiên định”",
      "C. “5 vững”",
      "D. “3 đột phá”"
    ],
    "answer": 1
  },
  {
    "question": "Câu 6. Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, nội dung nào sau đây thuộc “4 kiên định”?",
    "options": [
      "A. Kiên định hội nhập quốc tế",
      "B. Kiên định đường lối đổi mới của Đảng",
      "C. Kiên định phát triển kinh tế - xã hội",
      "D. Kiên định công nghiệp hóa, hiện đại hóa"
    ],
    "answer": 1
  },
  {
    "question": "Câu 7. Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, “chính trị, tư tưởng trong Đảng” được hiểu là trạng thái thống nhất về:",
    "options": [
      "A. Nhận thức và tổ chức",
      "B. Nhận thức, niềm tin, ý chí và hành động",
      "C. Ý chí và kỷ luật",
      "D. Tư tưởng và sinh hoạt"
    ],
    "answer": 1
  },
  {
    "question": "Câu 8. Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, “công tác chính trị, tư tưởng” là tổng thể hoạt động của:",
    "options": [
      "A. Cơ quan tuyên giáo các cấp",
      "B. Cấp ủy, tổ chức đảng",
      "C. Nhà nước và Mặt trận Tổ quốc",
      "D. Các tổ chức đoàn thể"
    ],
    "answer": 1
  },
  {
    "question": "Câu 9. Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, bảo vệ nền tảng tư tưởng của Đảng bao gồm nội dung nào?",
    "options": [
      "A. Tuyên truyền chủ trương mới để phòng, chống “diễn biến hòa bình”",
      "B. Giữ vững, phát triển giá trị khoa học, cách mạng của Chủ nghĩa Mác Lê Nin, tư tưởng Hồ Chí Minh, đường lối của Đảng và đấu tranh phản bác quan điểm sai trái, thù địch",
      "C. Xử lý có hiệu quả các thông tin xấu độc",
      "D. Tăng cường quản lý mạng xã hội và hoạt động của cán bộ, đảng viên trên không gian mạng."
    ],
    "answer": 1
  },
  {
    "question": "Câu 10. Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, “dư luận xã hội” được hiểu là gi?",
    "options": [
      "A. Ý kiến của cán bộ, đảng viên và quần chúng về một vấn đề gì đó",
      "B. Ý kiến, thái độ và tâm trạng của các nhóm xã hội trước những vấn đề liên quan",
      "C. Thông tin trên báo chí và các trang mạng về sự việc có liên quan",
      "D. Ý kiến của cơ quan quản lý về vấn đề liên quan"
    ],
    "answer": 1
  },
  {
    "question": "Câu 11. Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, một yêu cầu quan trọng trong công tác chính trị là:",
    "options": [
      "A. Đi trước, mở đường, dẫn dắt, chỉ đạo thực tiễn",
      "B. Tập trung xử lý hậu quả, định hướng tư tưởng trong Nhân dân",
      "C. Tập trung vào tuyên truyền chủ trương, đường lối của Đảng",
      "D. Chỉ đạo theo từng vụ việc cụ thể"
    ],
    "answer": 0
  },
  {
    "question": "Câu 12. Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, công tác chính trị, tư tưởng phải gắn chặt với những công tác nào?",
    "options": [
      "A. Tổ chức, cán bộ, kiểm tra, giám sát và dân vận",
      "B. Hậu cần, kỹ thuật và tài chính",
      "C. Đối ngoại, kinh tế, khoa học, công nghệ",
      "D. Văn hóa, giáo dục, đào tạo, khoa học, công nghệ"
    ],
    "answer": 0
  },
  {
    "question": "Câu 13. Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, ai chịu trách nhiệm cao nhất trong đánh giá về chính trị, tư tưởng của tổ chức đảng và cán bộ, đảng viên thuộc quyền quản lý?",
    "options": [
      "A. Người đứng đầu, cán bộ, đảng viên",
      "B. Cấp ủy, tập thể lãnh đạo, người đứng đầu",
      "C. Cơ quan tuyên giáo và người đứng đầu",
      "D. Ủy ban kiểm tra và người đứng đầu"
    ],
    "answer": 1
  },
  {
    "question": "Câu 14. Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, cấp ủy các cấp phải tổ chức nghiên cứu, học tập, quán triệt nghị quyết nhằm bảo đảm:",
    "options": [
      "A. 100% cán bộ, đảng viên thuộc phạm vi quản lý được học tập, quán triệt",
      "B. 90% cán bộ, đảng viên trở lên tham gia học tập, quán triệt",
      "C. Hầu hết cán bộ chủ trì và đảng viên phải tham gia học tập, quán triệt",
      "D. Chỉ đảng viên mới tham gia"
    ],
    "answer": 0
  },
  {
    "question": "Câu 15. Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, phương châm nghiên cứu, học tập nghị quyết là:",
    "options": [
      "A. Học kỹ, nhớ lâu, làm tốt",
      "B. Hiểu sâu, hành động đúng, làm đến cùng",
      "C. Học tập thường xuyên, liên tục, đáp ứng yêu cầu",
      "D. Nắm chắc, vận dụng linh hoạt, sát thực tiễn"
    ],
    "answer": 1
  },
  {
    "question": "Câu 1. Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, công tác kiểm tra, giám sát được xác định là:",
    "options": [
      "A. Một phương thức lãnh đạo quan trọng của Đảng",
      "B. Một nhiệm vụ chuyên môn của Ủy ban Kiểm tra",
      "C. Một hoạt động quản lý hành chính của Nhà nước",
      "D. Một biện pháp xử lý vi phạm của các cơ quan chức năng"
    ],
    "answer": 0
  },
  {
    "question": "Câu 2. Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, công tác kiểm tra, giám sát là cơ chế để:",
    "options": [
      "A. Đánh giá cán bộ",
      "B. Kiểm soát quyền lực",
      "C. Quản lý đảng viên",
      "D. Điều hành tổ chức"
    ],
    "answer": 1
  },
  {
    "question": "Câu 3. Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, công tác kiểm tra, giám sát là nhiệm vụ:",
    "options": [
      "A. Theo từng giai đoạn",
      "B. Khi có vụ việc",
      "C. Thường xuyên, liên tục",
      "D. Chỉ khi có vi phạm"
    ],
    "answer": 2
  },
  {
    "question": "Câu 4. Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, đổi mới công tác kiểm tra, giám sát phải gắn chặt với:",
    "options": [
      "A. Công tác chính trị, tư tưởng, tổ chức, cán bộ",
      "B. Công tác tài chính, hậu cần, kỹ thuật",
      "C. Công tác đối ngoại, kinh tế, khoa học công nghệ",
      "D. Công tác hành chính, pháp luật"
    ],
    "answer": 0
  },
  {
    "question": "Câu 5. Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, công tác kiểm tra, giám sát phải được tiến hành theo yêu cầu nào?",
    "options": [
      "A. Chủ động, kịp thời, toàn diện",
      "B. Tập trung, nhanh, gọn",
      "C. Linh hoạt, mềm dẻo, kín đáo",
      "D. Chuyên sâu, độc lập, định kỳ"
    ],
    "answer": 0
  },
  {
    "question": "Câu 6. Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, tổ chức đảng và đảng viên phải thường xuyên:",
    "options": [
      "A. Tự soi, tự sửa",
      "B. Tự đánh giá, tự xếp loại",
      "C. Tự kiểm điểm định kỳ",
      "D. Tự báo cáo kết quả"
    ],
    "answer": 0
  },
  {
    "question": "Câu 7. Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, phương châm trong kiểm tra, giám sát và kỷ luật đảng là:",
    "options": [
      "A. Không có ngoại lệ, không có tư lợi",
      "B. Không có vùng cấm, không có ngoại lệ",
      "C. Bình đẳng và công khai",
      "D. Nghiêm minh và thận trọng"
    ],
    "answer": 1
  },
  {
    "question": "Câu 8. Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, việc xử lý vi phạm phải bảo đảm:",
    "options": [
      "A. Chính xác và công khai",
      "B. Nghiêm minh, kịp thời",
      "C. Linh hoạt, phù hợp",
      "D. Thận trọng, từng bước"
    ],
    "answer": 1
  },
  {
    "question": "Câu 9. Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, mục tiêu của công tác kiểm tra, giám sát là góp phần:",
    "options": [
      "A. Tăng số lượng kiểm tra",
      "B. Nâng cao hiệu lực quản lý",
      "C. Xây dựng Đảng trong sạch, vững mạnh",
      "D. Mở rộng hoạt động của Ủy ban Kiểm tra"
    ],
    "answer": 2
  },
  {
    "question": "Câu 10. Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, để tạo chuyển biến về nhận thức, cần chú trọng công tác kiểm tra, giám sát ngay từ:",
    "options": [
      "A. Cấp Trung ương",
      "B. Cấp tỉnh",
      "C. Cấp cơ sở",
      "D. Cấp xã"
    ],
    "answer": 2
  },
  {
    "question": "Câu 11. Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, việc công khai kết quả kiểm tra, giám sát và thi hành kỷ luật nhằm:",
    "options": [
      "A. Tăng tính minh bạch",
      "B. Tăng số vụ xử lý",
      "C. Mở rộng quyền kiểm tra",
      "D. Thay thế công tác tuyên truyền"
    ],
    "answer": 0
  },
  {
    "question": "Câu 12. Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, việc hoàn thiện hệ thống quy định về kiểm tra, giám sát phải bảo đảm:",
    "options": [
      "A. Đồng bộ, thống nhất, liên thông",
      "B. Tập trung, chặt chẽ, nghiêm khắc",
      "C. Đơn giản, linh hoạt, dễ thực hiện",
      "D. Phân cấp, phân quyền, tự chủ"
    ],
    "answer": 0
  },
  {
    "question": "Câu 13. Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, cấp ủy, tổ chức đảng và Ủy ban Kiểm tra các cấp phải chủ động xây dựng:",
    "options": [
      "A. Kế hoạch công tác cán bộ",
      "B. Chương trình kiểm tra, giám sát",
      "C. Quy chế làm việc của Ủy ban Kiểm tra",
      "D. Kế hoạch tuyên truyền"
    ],
    "answer": 1
  },
  {
    "question": "Câu 14. Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, nhiệm vụ trọng tâm của Ủy ban Kiểm tra các cấp là:",
    "options": [
      "A. Kiểm tra khi có dấu hiệu vi phạm",
      "B. Kiểm tra thường xuyên mọi tổ chức",
      "C. Kiểm tra toàn bộ cán bộ hằng năm",
      "D. Kiểm tra theo đơn thư phản ánh"
    ],
    "answer": 0
  },
  {
    "question": "Câu 15. Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, một điểm đổi mới quan trọng trong phương pháp kiểm tra, giám sát là chuyển trọng tâm:",
    "options": [
      "A. Từ xử lý sang kiểm tra",
      "B. Từ phòng ngừa sang xử lý",
      "C. Sang phòng ngừa, cảnh báo vi phạm",
      "D. Từ thường xuyên sang chuyên đề"
    ],
    "answer": 2
  },
  {
    "question": "Câu 1. Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, mục tiêu tổng quát của công tác phòng, chống tham nhũng, lãng phí, tiêu cực là:",
    "options": [
      "A. Tăng cường xử lý sai phạm, không để các vụ việc nhỏ bùng phát thành vụ việc lớn",
      "B. Kiên quyết, kiên trì phòng ngừa, kiểm soát, ngăn chặn, đẩy lùi",
      "C. Mở rộng hoạt động thanh tra, kiểm tra các cấp",
      "D. Nâng cao hiệu quả quản lý nhà nước"
    ],
    "answer": 1
  },
  {
    "question": "Câu 2. Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, công tác phòng, chống tham nhũng, lãng phí, tiêu cực phải đặt dưới:",
    "options": [
      "A. Sự lãnh đạo của Nhà nước",
      "B. Sự lãnh đạo trực tiếp, toàn diện của Đảng",
      "C. Sự quản lý của Chính phủ",
      "D. Sự giám sát của cơ quan kiểm tra"
    ],
    "answer": 1
  },
  {
    "question": "Câu 3. Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, cùng với sự lãnh đạo của Đảng, yếu tố nào được nhấn mạnh trong phòng, chống tham nhũng, lãng phí, tiêu cực?",
    "options": [
      "A. Giám sát của Nhân dân",
      "B. Kiểm toán nhà nước",
      "C. Thanh tra chuyên ngành",
      "D. Giám sát của doanh nghiệp"
    ],
    "answer": 0
  },
  {
    "question": "Câu 4. Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, công tác phòng, chống tham nhũng, lãng phí, tiêu cực phải được tiến hành:",
    "options": [
      "A. Theo chuyên đề",
      "B. Khi có vụ việc",
      "C. Thường xuyên, liên tục, từ cơ sở",
      "D. Theo từng giai đoạn"
    ],
    "answer": 2
  },
  {
    "question": "Câu 5. Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, các biện pháp phòng, chống tham nhũng, lãng phí, tiêu cực phải hướng tới:",
    "options": [
      "A. “Không thể, không dám, không muốn, không cần”",
      "B. “Không sai, không sót, không chậm, không né”",
      "C. “Không tham, không lãng phí, không tiêu cực”",
      "D. “Không vi phạm, không buông lỏng, không bao che”"
    ],
    "answer": 0
  },
  {
    "question": "Câu 6. Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, lợi ích nào phải được đặt lên trên hết trong phòng, chống tham nhũng, lãng phí, tiêu cực?",
    "options": [
      "A. Lợi ích của cơ quan, đơn vị",
      "B. Lợi ích của doanh nghiệp, người dân",
      "C. Lợi ích quốc gia - dân tộc và Nhân dân",
      "D. Lợi ích của địa phương, đơn vị"
    ],
    "answer": 2
  },
  {
    "question": "Câu 7. Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, quan điểm xử lý mối quan hệ giữa đấu tranh phòng, chống tham nhũng và phát triển là:",
    "options": [
      "A. Tập trung đấu tranh, không ưu tiên phát triển",
      "B. Vừa đấu tranh, vừa kiến tạo phát triển",
      "C. Ưu tiên phát triển trước xử lý",
      "D. Chỉ xử lý sau khi phát triển"
    ],
    "answer": 1
  },
  {
    "question": "Câu 8. Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, nội dung nào được xác định là cốt lõi trong phòng, chống tham nhũng, lãng phí, tiêu cực?",
    "options": [
      "A. Phòng ngừa",
      "B. Kiểm tra",
      "C. Kiểm soát quyền lực",
      "D. Xử lý vi phạm"
    ],
    "answer": 2
  },
  {
    "question": "Câu 9. Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, nội dung nào được xác định là trọng tâm để nâng cao hiệu quả phòng, chống tham nhũng, lãng phí, tiêu cực?",
    "options": [
      "A. Thanh tra, kiểm tra, kiểm soát",
      "B. Khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số",
      "C. Tuyên truyền, vận động, giảm thiểu vi phạm",
      "D. Điều tra, truy tố, xét xử, xử lý nghiêm minh, khách quan"
    ],
    "answer": 1
  },
  {
    "question": "Câu 10. Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, phương châm xử lý vi phạm là gì?",
    "options": [
      "A. Nhanh, mạnh, nghiêm, đáp ứng yêu cầu nhiệm vụ",
      "B. Nghiêm minh, kịp thời, nhân văn, thuyết phục",
      "C. Linh hoạt, mềm dẻo, phù hợp, khoa học",
      "D. Công khai, minh bạch, thận trọng"
    ],
    "answer": 1
  },
  {
    "question": "Câu 11. Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, khi xử lý tham nhũng, lãng phí, tiêu cực, cần ưu tiên:",
    "options": [
      "A. Xử lý hình sự",
      "B. Thu hồi tối đa tài sản",
      "C. Công khai vụ việc",
      "D. Xử lý người đứng đầu"
    ],
    "answer": 1
  },
  {
    "question": "Câu 12. Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, một trong những yêu cầu đối với người đứng đầu là:",
    "options": [
      "A. Trực tiếp lãnh đạo, chỉ đạo công tác phòng, chống tham nhũng, lãng phí, tiêu cực",
      "B. Giao toàn bộ cho cơ quan kiểm tra",
      "C. Kịp thời xử lý khi có vụ việc",
      "D. Chịu trách nhiệm khi có thiệt hại"
    ],
    "answer": 0
  },
  {
    "question": "Câu 13. Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, văn hóa liêm chính được xác định là:",
    "options": [
      "A. Giá trị bổ trợ, nâng cao tính Đảng, tính khoa học",
      "B. Giá trị cốt lõi, chuẩn mực ứng xử và đạo đức",
      "C. Nội dung tuyên truyền, giáo dục thuyết phục",
      "D. Tiêu chí thi đua, đánh giá đúng năng lực"
    ],
    "answer": 1
  },
  {
    "question": "Câu 14. Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, quốc gia và xã hội liêm chính được xây dựng trên 3 trụ cột là:",
    "options": [
      "A. Thể chế liêm chính - nền công vụ liêm chính - đội ngũ cán bộ, đảng viên, công chức, viên chức liêm chính",
      "B. Pháp luật liêm chính - xã hội liêm chính - doanh nghiệp liêm chính",
      "C. Đảng liêm chính - Nhà nước liêm chính - Nhân dân liêm chính",
      "D. Cán bộ liêm chính - doanh nghiệp liêm chính - xã hội liêm chính"
    ],
    "answer": 0
  },
  {
    "question": "Câu 15. Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, một yêu cầu quan trọng trong hoàn thiện thể chế là:",
    "options": [
      "A. Mở rộng cơ chế xin – cho",
      "B. Xóa bỏ cơ chế xin - cho",
      "C. Tăng quyền cho cơ quan quản lý",
      "D. Giảm trách nhiệm giải trình"
    ],
    "answer": 1
  },
  {
    "question": "Câu 1. Theo Kết luận số 18-KL/TW ngày 02/4/2026 của Ban Chấp hành Trung ương về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, mục tiêu tăng trưởng GDP bình quân giai đoạn 2026–2030 là:",
    "options": [
      "A. Trên 8%/năm",
      "B. Trên 9%/năm",
      "C. Từ 10%/năm trở lên",
      "D. Khoảng 7%/năm"
    ],
    "answer": 2
  },
  {
    "question": "Câu 2. Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, mục tiêu tăng trưởng “2 con số” phải gắn với yêu cầu nào?",
    "options": [
      "A. Giảm đầu tư công",
      "B. Ổn định kinh tế vĩ mô",
      "C. Tăng khai thác tài nguyên",
      "D. Mở rộng tín dụng"
    ],
    "answer": 1
  },
  {
    "question": "Câu 3. Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, mục tiêu đến năm 2030 của Việt Nam là:",
    "options": [
      "A. Trở thành nước phát triển có công nghiệp hiện đại, thu nhập trung bình cao",
      "B. Trở thành nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao",
      "C. Trở thành nước có thu nhập cao",
      "D. Trở thành trung tâm tài chính khu vực"
    ],
    "answer": 1
  },
  {
    "question": "Câu 4. Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, một trong những yêu cầu xuyên suốt là:",
    "options": [
      "A. Đổi mới quản trị thể chế",
      "B. Thu hẹp khu vực tư nhân",
      "C. Giảm hội nhập quốc tế",
      "D. Tăng bao cấp kinh tế"
    ],
    "answer": 0
  },
  {
    "question": "Câu 5. Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, phương thức quản lý nhà nước cần chuyển mạnh từ:",
    "options": [
      "A. Tiền kiểm sang hậu kiểm",
      "B. Hậu kiểm sang tiền kiểm",
      "C. Phân cấp sang tập trung",
      "D. Giám sát sang kiểm soát"
    ],
    "answer": 0
  },
  {
    "question": "Câu 6. Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, trong phát triển kinh tế - xã hội cần:",
    "options": [
      "A. Đẩy mạnh phân cấp, phân quyền",
      "B. Tập trung quyền lực",
      "C. Giảm trách nhiệm giải trình",
      "D. Hạn chế giám sát"
    ],
    "answer": 0
  },
  {
    "question": "Câu 7. Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, một nhiệm vụ trọng tâm là chuyển sang mô hình tăng trưởng dựa chủ yếu vào:",
    "options": [
      "A. Tài nguyên thiên nhiên, tư liệu sản xuất sẵn có",
      "B. Khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số",
      "C. Lao động giá rẻ, khoa học công nghệ hiện đại",
      "D. Vốn đầu tư công và lao động rẻ"
    ],
    "answer": 1
  },
  {
    "question": "Câu 8. Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, công nghiệp quốc gia cần được xây dựng theo hướng:",
    "options": [
      "A. Nhỏ, phân tán",
      "B. Hiện đại, tự chủ",
      "C. Phụ thuộc nhập khẩu",
      "D. Tập trung vào gia công"
    ],
    "answer": 1
  },
  {
    "question": "Câu 9. Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, đối với kinh tế nhà nước, trọng tâm đổi mới là:",
    "options": [
      "A. Mở rộng bao cấp, đáp ứng nhu cầu xã hội",
      "B. Quản trị doanh nghiệp theo chuẩn mực quốc tế",
      "C. Tăng biên chế, nâng cao khả năng vận hành của doanh nghiệp",
      "D. Giảm đầu tư công, hạn chế thất thoát"
    ],
    "answer": 1
  },
  {
    "question": "Câu 10. Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, phát triển kinh tế tư nhân phải bảo đảm:",
    "options": [
      "A. Được bảo hộ riêng để phát triển",
      "B. Bình đẳng trong tiếp cận nguồn lực",
      "C. Chỉ hoạt động trong nước",
      "D. Hạn chế cạnh tranh"
    ],
    "answer": 1
  },
  {
    "question": "Câu 11. Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, chính sách thu hút FDI cần chuyển từ:",
    "options": [
      "A. Ưu đãi trước sang ưu đãi sau",
      "B. Ưu đãi thuế sang ưu đãi theo kết quả",
      "C. Ưu đãi nhiều sang ưu đãi ít",
      "D. Thu hút rộng sang thu hút hẹp"
    ],
    "answer": 1
  },
  {
    "question": "Câu 12. Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, một yêu cầu quan trọng đối với khu vực FDI là:",
    "options": [
      "A. Tăng nhập khẩu",
      "B. Thúc đẩy chuyển giao công nghệ",
      "C. Giảm liên kết trong nước",
      "D. Tăng sử dụng lao động giản đơn"
    ],
    "answer": 1
  },
  {
    "question": "Câu 13. Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, phát triển thị trường trong nước được xác định là:",
    "options": [
      "A. Điểm tựa quan trọng cho tăng trưởng",
      "B. Nhiệm vụ thứ yếu",
      "C. Nguồn thu ngắn hạn, đáp ứng yêu cầu cấp bách",
      "D. Giải pháp tình thế trong điều kiện mới"
    ],
    "answer": 0
  },
  {
    "question": "Câu 14. Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, phát triển thị trường vốn trong nước nhằm:",
    "options": [
      "A. Giảm xuất khẩu",
      "B. Làm kênh huy động vốn dài hạn",
      "C. Giảm đầu tư tư nhân",
      "D. Hạn chế thị trường chứng khoán"
    ],
    "answer": 1
  },
  {
    "question": "Câu 15. Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, quản lý tài chính quốc gia phải bảo đảm:",
    "options": [
      "A. Chi tiêu mở rộng, đáp ứng yêu cầu trong tình hình mới",
      "B. Cân đối bền vững, an toàn tài chính quốc gia",
      "C. Tăng vay nợ, kịp thời đầu tư các dự án mới",
      "D. Giảm thu ngân sách, tăng chi cho các hoạt động"
    ],
    "answer": 1
  },
  {
    "question": "Câu 1. Qua nghiên cứu chuyên đề năm 2026, mục tiêu sâu xa của việc giúp Nhân dân phát triển kinh tế, giảm nghèo không chỉ nhằm cải thiện đời sống mà còn nhằm làm gì?",
    "options": [
      "A. Góp phần nâng cao hiệu quả phát triển kinh tế - xã hội, cải thiện điều kiện sống và tạo sinh kế ổn định cho Nhân dân.",
      "B. Góp phần hoàn thành các tiêu chí phát triển kinh tế - xã hội, xây dựng nông thôn mới và nâng cao đời sống ở địa phương.",
      "C. Tạo điều kiện thu hút nguồn lực đầu tư, phát huy tiềm năng địa phương và thúc đẩy phát triển sản xuất, kinh doanh.",
      "D. Củng cố niềm tin của Nhân dân, xây dựng mối quan hệ gắn bó máu thịt giữa Nhân dân với LLVT."
    ],
    "answer": 3
  },
  {
    "question": "Câu 2. Qua nghiên cứu chuyên đề năm 2026, ý nghĩa chiến lược của việc xây dựng hệ thống chính trị cơ sở vững mạnh là gì?",
    "options": [
      "A. Góp phần nâng cao hiệu quả quản lý nhà nước, phát triển kinh tế - xã hội và cải thiện đời sống Nhân dân trên địa bàn.",
      "B. Phát huy tính chủ động của địa phương trong tổ chức thực hiện nhiệm vụ, giải quyết các vấn đề phát sinh từ cơ sở.",
      "C. Tạo “lá chắn” chính trị từ cơ sở, chủ động phòng ngừa nguy cơ mất ổn định ngay từ địa bàn.",
      "D. Nâng cao chất lượng xây dựng Đảng, củng cố tổ chức cơ sở đảng và hoàn thành các chỉ tiêu, nhiệm vụ chính trị được giao."
    ],
    "answer": 2
  },
  {
    "question": "Câu 3. Qua nghiên cứu chuyên đề năm 2026,, bản chất của các mô hình “Dân vận khéo” là gì?",
    "options": [
      "A. Tổ chức các hoạt động hỗ trợ, giúp đỡ Nhân dân trong những thời điểm, hoàn cảnh cụ thể.",
      "B. Triển khai các hoạt động xã hội, phong trào quần chúng nhằm tạo sự đồng thuận và huy động sức mạnh cộng đồng.",
      "C. Gắn công tác dân vận với giải quyết trực tiếp nhu cầu, lợi ích thiết thực của Nhân dân.",
      "D. Đẩy mạnh tuyên truyền, phổ biến pháp luật, nâng cao nhận thức và ý thức chấp hành của Nhân dân trên địa bàn."
    ],
    "answer": 2
  },
  {
    "question": "Câu 4. Qua nghiên cứu chuyên đề năm 2026,, việc hỗ trợ sinh kế lâu dài cho đồng bào có ý nghĩa nổi bật nào sau đây?",
    "options": [
      "A. Góp phần nâng cao thu nhập, cải thiện đời sống và tạo điều kiện để đồng bào ổn định cuộc sống lâu dài.",
      "B. Tạo điều kiện hình thành các mô hình sản xuất, hợp tác và liên kết kinh tế phù hợp với đặc điểm địa bàn.",
      "C. Thúc đẩy phát triển sản xuất hàng hóa, khai thác tiềm năng địa phương và nâng cao hiệu quả sử dụng các nguồn lực.",
      "D. Góp phần làm thất bại âm mưu lợi dụng đói nghèo để kích động, chia rẽ khối đại đoàn kết toàn dân tộc."
    ],
    "answer": 3
  },
  {
    "question": "Câu 5. Qua nghiên cứu chuyên đề năm 2026, để giải quyết các điểm nóng về an ninh nông thôn đạt hiệu quả bền vững cần thực hiện biện pháp nào sau đây?",
    "options": [
      "A. Tập trung lực lượng, tăng cường các biện pháp xử lý nhằm nhanh chóng ổn định tình hình và hạn chế vụ việc lan rộng.",
      "B. Kết hợp các biện pháp hành chính, pháp luật với công tác kiểm tra, giám sát và xử lý nghiêm những trường hợp vi phạm.",
      "C. Chủ động nắm tình hình, tập trung giải quyết những hậu quả phát sinh sau vụ việc, đồng thời rút kinh nghiệm trong tổ chức thực hiện.",
      "D. Kết hợp giữa công tác dân vận với các biện pháp quốc phòng, an ninh và phát huy vai trò của Nhân dân."
    ],
    "answer": 3
  },
  {
    "question": "Câu 6. Qua nghiên cứu chuyên đề năm 2026, bản chất của “thế trận lòng dân” nhằm mục đích nào sau đây?",
    "options": [
      "A. Phát huy sức mạnh của Nhân dân trong tham gia xây dựng nền quốc phòng toàn dân và bảo vệ địa bàn.",
      "B. Tăng cường lực lượng dân quân tự vệ, dự bị động viên và nâng cao khả năng huy động nguồn lực tại cơ sở.",
      "C. Xây dựng niềm tin, sự đồng thuận và mối quan hệ gắn bó giữa Nhân dân với Đảng, Nhà nước và Quân đội.",
      "D. Củng cố hệ thống chính trị cơ sở, nâng cao hiệu quả quản lý địa bàn và xây dựng khu vực phòng thủ vững chắc."
    ],
    "answer": 2
  },
  {
    "question": "Câu 7. Qua nghiên cứu chuyên đề năm 2026, ý nghĩa lớn nhất của hoạt động giúp dân trong thiên tai, dịch bệnh là gì?",
    "options": [
      "A. Góp phần nâng cao khả năng cơ động, tổ chức lực lượng và năng lực ứng phó với các tình huống khẩn cấp của đơn vị.",
      "B. Góp phần xây dựng hình ảnh người quân nhân và tạo sự đồng thuận trên địa bàn.",
      "C. Phát huy tinh thần trách nhiệm, khả năng phối hợp của các lực lượng và nâng cao hiệu quả thực hiện nhiệm vụ cứu hộ, cứu nạn.",
      "D. Củng cố niềm tin của Nhân dân, tăng cường đoàn kết quân - dân và khẳng định bản chất “Đội quân công tác”."
    ],
    "answer": 3
  },
  {
    "question": "Câu 8. Qua nghiên cứu chuyên đề năm 2026, hạn chế về năng lực nói tiếng dân tộc của một bộ phận cán bộ ảnh hưởng trực tiếp đến nội dung gì?",
    "options": [
      "A. Khả năng tổ chức, bảo đảm các hoạt động hậu cần, kỹ thuật và đời sống của đơn vị trên địa bàn.",
      "B. Khả năng thực hiện nhiệm vụ tuyển chọn, gọi công dân nhập ngũ và quản lý quân số tại địa phương.",
      "C. Khả năng nắm tình hình, tổ chức lực lượng và phối hợp thực hiện nhiệm vụ quốc phòng, an ninh trên địa bàn.",
      "D. Hiệu quả tuyên truyền, vận động, nắm bắt tâm tư và tạo dựng niềm tin với đồng bào dân tộc thiểu số."
    ],
    "answer": 3
  },
  {
    "question": "Câu 9. Qua nghiên cứu chuyên đề năm 2026, yêu cầu nâng cao chất lượng công tác dân vận trên địa bàn trọng điểm về quốc phòng, an ninh trước hết phải hướng vào mục tiêu nào?",
    "options": [
      "A. Góp phần phát triển kinh tế - xã hội, nâng cao đời sống và tạo điều kiện ổn định lâu dài cho Nhân dân trên địa bàn.",
      "B. Củng cố hệ thống chính trị ở cơ sở, nâng cao hiệu lực quản lý và khả năng giải quyết các vấn đề phát sinh từ địa bàn.",
      "C. Tăng cường mối quan hệ mật thiết giữa Đảng với Nhân dân, xây dựng khối đại đoàn kết toàn dân tộc và “thế trận lòng dân” vững chắc.",
      "D. Nâng cao chất lượng lực lượng dân quân tự vệ, dự bị động viên và khả năng huy động sức mạnh Nhân dân trong xây dựng nền quốc phòng toàn dân."
    ],
    "answer": 2
  },
  {
    "question": "Câu 10. Qua nghiên cứu chuyên đề năm 2026, vì sao việc quán triệt đường lối, chủ trương của Đảng được xác định là yêu cầu có ý nghĩa quyết định đối với công tác dân vận?",
    "options": [
      "A. Vì giúp thống nhất nhận thức, nội dung tuyên truyền và phương pháp tiến hành công tác dân vận giữa các cơ quan, đơn vị.",
      "B. Vì tạo cơ sở để cấp ủy, chỉ huy đánh giá trách nhiệm, năng lực và hiệu quả thực hiện công tác dân vận của cán bộ.",
      "C. Vì tạo điều kiện thuận lợi để các cơ quan, đơn vị phối hợp chặt chẽ với cấp ủy, chính quyền và các tổ chức ở địa phương.",
      "D. Vì là cơ sở để xác định đúng chủ trương, nội dung và phương thức tiến hành công tác dân vận phù hợp với đặc điểm từng địa bàn."
    ],
    "answer": 3
  },
  {
    "question": "Câu 11. Qua nghiên cứu chuyên đề năm 2026, việc nghiên cứu, nắm chắc đặc điểm từng địa bàn nhằm mục đích chủ yếu nào?",
    "options": [
      "A. Phân loại địa bàn theo đặc điểm dân cư, điều kiện kinh tế - xã hội và yêu cầu thực hiện nhiệm vụ quốc phòng, an ninh.",
      "B. Xây dựng kế hoạch, dự toán nguồn lực và bảo đảm các điều kiện cần thiết cho hoạt động của cơ quan, đơn vị trên địa bàn.",
      "C. Lựa chọn chủ trương, biện pháp lãnh đạo, chỉ đạo và nội dung dân vận sát với thực tiễn.",
      "D. Xác định phương án tổ chức lực lượng, xây dựng dân quân tự vệ và chuẩn bị các điều kiện thực hiện nhiệm vụ quốc phòng, an ninh."
    ],
    "answer": 2
  },
  {
    "question": "Câu 12. Qua nghiên cứu chuyên đề năm 2026, công tác dân vận chỉ thực sự phát huy hiệu quả khi nào?",
    "options": [
      "A. Khi được tổ chức với lực lượng phù hợp, bảo đảm đầy đủ cán bộ và các điều kiện cần thiết cho quá trình thực hiện.",
      "B. Khi được đầu tư đầy đủ phương tiện, cơ sở vật chất và ứng dụng hiệu quả các phương tiện thông tin, truyền thông.",
      "C. Khi được triển khai thống nhất, đồng bộ trên các địa bàn, bảo đảm các cơ quan, đơn vị thực hiện cùng một nội dung và phương thức.",
      "D. Khi xuất phát từ thực tiễn, phù hợp với đặc điểm từng địa bàn và từng nhóm đối tượng, bảo đảm thiết thực, hiệu quả."
    ],
    "answer": 3
  },
  {
    "question": "Câu 13. Qua nghiên cứu chuyên đề năm 2026, điều gì sẽ xảy ra nếu cán bộ làm công tác dân vận thiếu hiểu biết về phong tục, tập quán của đồng bào?",
    "options": [
      "A. Khó lựa chọn hình thức tổ chức hoạt động dân vận phù hợp với điều kiện, đặc điểm của từng địa bàn.",
      "B. Khó huy động nguồn lực và tổ chức các mô hình dân vận phù hợp với điều kiện thực tế của địa phương.",
      "C. Gặp khó khăn trong phối hợp với cấp ủy, chính quyền và các tổ chức quần chúng ở cơ sở khi triển khai nhiệm vụ.",
      "D. Hiệu quả tuyên truyền, vận động và tạo dựng niềm tin với đồng bào sẽ giảm sút."
    ],
    "answer": 3
  },
  {
    "question": "Câu 14. Qua nghiên cứu chuyên đề năm 2026, xây dựng “thế trận lòng dân” vững chắc được coi là nền tảng trực tiếp để làm gì?",
    "options": [
      "A. Góp phần phát triển kinh tế - xã hội, nâng cao đời sống Nhân dân và ổn định địa bàn.",
      "B. Nâng cao chất lượng huấn luyện, sẵn sàng chiến đấu và khả năng thực hiện nhiệm vụ của lực lượng vũ trang.",
      "C. Củng cố hệ thống cơ sở hạ tầng, giao thông và nâng cao khả năng bảo đảm cho nhiệm vụ quốc phòng, an ninh.",
      "D. Giữ vững ổn định chính trị, củng cố quốc phòng, an ninh từ cơ sở."
    ],
    "answer": 3
  },
  {
    "question": "Câu 15. Qua nghiên cứu chuyên đề năm 2026, nội dung nào phản ánh đúng nhất tư tưởng Hồ Chí Minh về cán bộ làm công tác dân vận?",
    "options": [
      "A. Cán bộ làm công tác dân vận phải nắm vững chủ trương, đường lối, chính sách và tổ chức thực hiện đúng các văn bản chỉ đạo.",
      "B. Cán bộ làm công tác dân vận cần có trình độ lý luận vững vàng, phương pháp vận động khoa học và khả năng thuyết phục quần chúng.",
      "C. Cán bộ làm công tác dân vận phải coi trọng tuyên truyền, giáo dục, giải thích để Nhân dân hiểu và đồng thuận với chủ trương, chính sách.",
      "D. Cán bộ làm công tác dân vận phải sâu sát thực tiễn, gần dân, hiểu dân và trực tiếp hành động, không chỉ dừng ở lời nói."
    ],
    "answer": 3
  },
  {
    "question": "Câu 16. Qua nghiên cứu chuyên đề năm 2026, yêu cầu đổi mới công tác dân vận trong tình hình mới trước hết đòi hỏi cấp ủy, chỉ huy các cấp phải thay đổi theo hướng nào?",
    "options": [
      "A. Tăng cường ứng dụng công nghệ thông tin, mở rộng các hình thức tuyên truyền và vận động Nhân dân trên môi trường số.",
      "B. Đẩy mạnh công tác quản lý hành chính, hoàn thiện quy trình phối hợp và nâng cao hiệu quả quản lý địa bàn.",
      "C. Tăng cường đầu tư cơ sở vật chất, phương tiện và các điều kiện bảo đảm nhằm nâng cao hiệu quả hoạt động dân vận.",
      "D. Đổi mới tư duy lãnh đạo, lựa chọn nội dung, hình thức và phương pháp dân vận phù hợp với đặc điểm từng địa bàn, từng đối tượng."
    ],
    "answer": 3
  },
  {
    "question": "Câu 17. Qua nghiên cứu chuyên đề năm 2026, bản chất của việc phát huy vai trò người có uy tín trong đồng bào dân tộc, tôn giáo là gì?",
    "options": [
      "A. Góp phần giảm tải công việc cho cán bộ cơ sở, nâng cao hiệu quả phối hợp và tổ chức các hoạt động vận động quần chúng.",
      "B. Phát huy vai trò tự quản của cộng đồng, tăng cường sự tham gia của Nhân dân trong giải quyết các vấn đề tại địa bàn.",
      "C. Tăng cường sự phối hợp giữa các tổ chức chính trị - xã hội, đoàn thể và lực lượng nòng cốt trong công tác vận động quần chúng.",
      "D. Tạo sức lan tỏa trong cộng đồng, nâng cao hiệu quả tuyên truyền, vận động và củng cố khối đại đoàn kết toàn dân tộc."
    ],
    "answer": 3
  },
  {
    "question": "Câu 18. Qua nghiên cứu chuyên đề năm 2026, vì sao công tác dân vận phải gắn chặt với nhiệm vụ phát triển kinh tế - xã hội của địa phương?",
    "options": [
      "A. Vì góp phần nâng cao hiệu quả quản lý, điều hành và hỗ trợ địa phương thực hiện các mục tiêu phát triển kinh tế - xã hội.",
      "B. Vì tạo điều kiện để địa phương hoàn thành các chỉ tiêu phát triển kinh tế - xã hội và nâng cao chất lượng đời sống Nhân dân.",
      "C. Vì góp phần huy động nguồn lực xã hội, tạo môi trường thuận lợi để thu hút đầu tư và phát triển sản xuất trên địa bàn.",
      "D. Vì lợi ích thiết thực của Nhân dân là cơ sở quan trọng để củng cố niềm tin, tăng cường sự đồng thuận xã hội và xây dựng mối quan hệ gắn bó quân - dân."
    ],
    "answer": 3
  },
  {
    "question": "Câu 19. Qua nghiên cứu chuyên đề năm 2026, trong xử lý các vấn đề phức tạp về dân tộc, tôn giáo, yêu cầu nào cần được ưu tiên?",
    "options": [
      "A. Chủ động áp dụng các biện pháp quản lý, kiểm tra và xử lý theo quy định nhằm nhanh chóng ổn định tình hình trên địa bàn.",
      "B. Tăng cường kiểm tra, giám sát định kỳ để kịp thời phát hiện những vấn đề phát sinh và chủ động có biện pháp xử lý phù hợp.",
      "C. Kiên trì tuyên truyền, đối thoại, giải quyết hài hòa giữa yêu cầu quản lý nhà nước và quyền, lợi ích hợp pháp của Nhân dân.",
      "D. Tăng cường phối hợp giữa các lực lượng, nâng cao hiệu quả quản lý địa bàn và chủ động xử lý những vấn đề phức tạp phát sinh."
    ],
    "answer": 2
  },
  {
    "question": "Câu 20. Qua nghiên cứu chuyên đề năm 2026, yếu tố nào quyết định tính bền vững của “thế trận lòng dân”?",
    "options": [
      "A. Quy mô nguồn lực đầu tư và mức độ bảo đảm các điều kiện vật chất cho công tác dân vận trên địa bàn.",
      "B. Số lượng, phạm vi và hiệu quả hoạt động của các mô hình “Dân vận khéo” được triển khai tại cơ sở.",
      "C. Mức độ phát triển kinh tế - xã hội, khả năng cải thiện đời sống và điều kiện sinh hoạt của Nhân dân.",
      "D. Sự đồng thuận của Nhân dân, niềm tin đối với Đảng, Nhà nước và Quân đội được xây dựng bằng những việc làm thiết thực, lâu dài."
    ],
    "answer": 3
  },
  {
    "question": "Câu 21. Qua nghiên cứu chuyên đề năm 2026, việc phối hợp giữa lực lượng vũ trang với cấp ủy, chính quyền địa phương cần bảo đảm yêu cầu nào?",
    "options": [
      "A. Phân định rõ chức năng, nhiệm vụ và trách nhiệm của từng lực lượng, bảo đảm phối hợp đúng thẩm quyền, tránh chồng chéo.",
      "B. Duy trì phối hợp chủ yếu khi xuất hiện vụ việc phức tạp, tập trung xử lý kịp thời những vấn đề phát sinh trên địa bàn.",
      "C. Phát huy vai trò nòng cốt của lực lượng quân sự trong phối hợp, chủ động tham mưu và tổ chức thực hiện các nhiệm vụ được giao.",
      "D. Thường xuyên, đồng bộ, thống nhất, phát huy sức mạnh tổng hợp của cả hệ thống chính trị."
    ],
    "answer": 3
  },
  {
    "question": "Câu 22. Qua nghiên cứu chuyên đề năm 2026, trong điều kiện các thế lực thù địch gia tăng chống phá trên không gian mạng, nội dung cần ưu tiên trong công tác dân vận?",
    "options": [
      "A. Tăng cường ứng dụng các giải pháp kỹ thuật, nâng cao khả năng quản lý và bảo đảm an toàn thông tin trên không gian mạng.",
      "B. Tăng cường quản lý việc tiếp cận mạng xã hội, hạn chế những nguồn thông tin có nguy cơ tác động tiêu cực đến Nhân dân.",
      "C. Nâng cao khả năng định hướng dư luận, tuyên truyền, đấu tranh phản bác thông tin sai trái và củng cố niềm tin của Nhân dân.",
      "D. Đẩy mạnh chuyển đổi số, mở rộng các hình thức tuyên truyền, vận động và từng bước chuyển hoạt động dân vận sang môi trường số."
    ],
    "answer": 2
  },
  {
    "question": "Câu 23. Qua nghiên cứu chuyên đề năm 2026, nếu cấp ủy, chỉ huy đơn vị chỉ coi công tác dân vận là nhiệm vụ của cơ quan chính trị thì hệ quả nào dễ xảy ra nhất?",
    "options": [
      "A. Làm giảm sự chủ động của các cơ quan, đơn vị trong phối hợp thực hiện nhiệm vụ dân vận và giải quyết những vấn đề phát sinh trên địa bàn.",
      "B. Làm hạn chế khả năng phối hợp giữa cơ quan chính trị với cấp ủy, chính quyền và các tổ chức quần chúng ở địa phương.",
      "C. Làm giảm chất lượng công tác giáo dục chính trị, tư tưởng và khả năng nắm bắt tâm tư, nguyện vọng của Nhân dân trên địa bàn.",
      "D. Không phát huy được sức mạnh tổng hợp của cả hệ thống, làm giảm hiệu quả công tác dân vận và xây dựng \"thế trận lòng dân\"."
    ],
    "answer": 3
  },
  {
    "question": "Câu 24. Qua nghiên cứu chuyên đề năm 2026, trong lãnh đạo công tác dân vận, nguyên tắc nào bảo đảm tính bền vững để đạt được kết quả cao nhất?",
    "options": [
      "A. Tập trung giải quyết kịp thời những vụ việc nổi cộm, phức tạp, tạo chuyển biến rõ nét và ổn định tình hình trên địa bàn.",
      "B. Ưu tiên triển khai các nội dung dân vận tại những địa bàn thuận lợi, có điều kiện tốt để tạo mô hình điểm và nhân rộng.",
      "C. Phân bổ nguồn lực tương đối đồng đều giữa các địa phương, bảo đảm các địa bàn đều được quan tâm và triển khai hoạt động dân vận.",
      "D. Kết hợp giải quyết những vấn đề trước mắt với chăm lo xây dựng cơ sở chính trị và phát triển địa bàn lâu dài."
    ],
    "answer": 3
  },
  {
    "question": "Câu 25. Qua nghiên cứu chuyên đề năm 2026, vì sao việc nắm chắc tình hình Nhân dân được coi là khâu mở đầu của công tác dân vận?",
    "options": [
      "A. Giúp cấp ủy, chỉ huy có cơ sở tổng hợp thông tin, phục vụ công tác báo cáo và đánh giá tình hình địa bàn.",
      "B. Giúp xác định những nhu cầu, vấn đề cần ưu tiên để tham mưu huy động nguồn lực và tổ chức các hoạt động hỗ trợ Nhân dân.",
      "C. Giúp đánh giá tương đối đầy đủ đời sống, điều kiện kinh tế - xã hội và những khó khăn của Nhân dân trên địa bàn.",
      "D. Để chủ động dự báo tình hình, lựa chọn đúng nội dung, đối tượng và biện pháp vận động phù hợp."
    ],
    "answer": 3
  },
  {
    "question": "Câu 26. Qua nghiên cứu chuyên đề năm 2026, khi xuất hiện vụ việc phức tạp liên quan đến dân tộc, tôn giáo, giải pháp nào cần được ưu tiên?",
    "options": [
      "A. Tăng cường kiểm tra, quản lý hành chính, kịp thời phát hiện và xử lý những vấn đề phát sinh theo quy định.",
      "B. Đẩy mạnh tuyên truyền công khai trên các phương tiện thông tin đại chúng nhằm định hướng nhận thức và ổn định dư luận.",
      "C. Phối hợp, bàn giao vụ việc cho chính quyền địa phương chủ trì giải quyết theo chức năng, nhiệm vụ và thẩm quyền.",
      "D. Phối hợp chặt chẽ giữa các lực lượng, kiên trì đối thoại, tuyên truyền, giải quyết đúng chính sách, đúng pháp luật, không để hình thành điểm nóng."
    ],
    "answer": 3
  },
  {
    "question": "Câu 27. Qua nghiên cứu chuyên đề năm 2026, điểm khác biệt cơ bản giữa công tác dân vận trong tình hình mới với trước đây là gì?",
    "options": [
      "A. Đổi mới hình thức tuyên truyền, vận động nhằm phù hợp hơn với điều kiện và phương tiện thông tin hiện nay.",
      "B. Mở rộng quy mô, tăng số lượng hoạt động dân vận và nâng cao mức độ tham gia của các lực lượng trên địa bàn.",
      "C. Đẩy mạnh ứng dụng công nghệ thông tin, chuyển đổi số và đa dạng hóa các phương thức tuyên truyền, vận động Nhân dân.",
      "D. Phải chủ động thích ứng với những biến đổi về xã hội, không gian mạng và phương thức chống phá của các thế lực thù địch."
    ],
    "answer": 3
  },
  {
    "question": "Câu 28. Qua nghiên cứu chuyên đề năm 2026, trong xây dựng “thế trận lòng dân”, yếu tố nào giữ vai trò quyết định lâu dài?",
    "options": [
      "A. Tiềm lực kinh tế của địa phương, khả năng huy động nguồn lực và mức độ phát triển kinh tế - xã hội trên địa bàn.",
      "B. Hệ thống công trình quốc phòng, khả năng bảo đảm cơ sở vật chất và các điều kiện phục vụ nhiệm vụ quốc phòng, an ninh.",
      "C. Chế độ, chính sách đối với cán bộ, chiến sĩ và các lực lượng trực tiếp thực hiện nhiệm vụ trên địa bàn.",
      "D. Niềm tin của Nhân dân đối với sự lãnh đạo của Đảng và vai trò của Quân đội được củng cố bằng kết quả thực tiễn."
    ],
    "answer": 3
  },
  {
    "question": "Câu 29. Qua nghiên cứu chuyên đề năm 2026, khi đánh giá chất lượng công tác dân vận, tiêu chí quan trọng nhất?",
    "options": [
      "A. Số lượng văn bản lãnh đạo, chỉ đạo và kế hoạch công tác dân vận được ban hành, triển khai trong năm.",
      "B. Số lượng hội nghị, hoạt động tuyên truyền, vận động và các chương trình phối hợp được tổ chức trên địa bàn.",
      "C. Số lượng mô hình “Dân vận khéo” được xây dựng, duy trì và nhân rộng tại các cơ quan, đơn vị, địa phương.",
      "D. Mức độ chuyển biến về nhận thức, sự đồng thuận của Nhân dân và sự ổn định chính trị - xã hội trên địa bàn."
    ],
    "answer": 3
  },
  {
    "question": "Câu 30. Qua nghiên cứu chuyên đề năm 2026, trước sự chống phá ngày càng tinh vi của các thế lực thù địch, yêu cầu đặt ra đối với công tác dân vận là?",
    "options": [
      "A. Đẩy mạnh tuyên truyền trên không gian mạng, đa dạng hóa nội dung và hình thức nhằm nâng cao nhận thức của Nhân dân.",
      "B. Tập trung giải quyết kịp thời các vụ việc phát sinh, đồng thời tăng cường rút kinh nghiệm để hạn chế những vấn đề tương tự.",
      "C. Mở rộng lực lượng chuyên trách, nâng cao năng lực nắm tình hình và tổ chức thực hiện công tác dân vận trên các địa bàn trọng điểm.",
      "D. Chủ động dự báo tình hình, phát hiện sớm, xử lý từ cơ sở và kết hợp chặt chẽ giữa công tác dân vận với nhiệm vụ quốc phòng, an ninh."
    ],
    "answer": 3
  },
  {
    "question": "Câu 1. Qua nghiên cứu chuyên đề năm 2026, bên cạnh nhiệm vụ huấn luyện, sẵn sàng chiến đấu để giữ vững độc lập, chủ quyền, Quân đội còn giữ vai trò nòng cốt trong việc thực hiện nhiệm vụ nào sau đây?",
    "options": [
      "A. Tiên phong thực hiện kết hợp quốc phòng với phát triển kinh tế - xã hội, xem đây là phương thức quan trọng xây dựng tiềm lực quốc phòng toàn dân.",
      "B. Trực tiếp nắm quyền điều hành nền kinh tế quốc dân, thay thế hoàn toàn vai trò quản lý điều hành kinh tế của các cơ quan chính quyền dân sự.",
      "C. Tập trung toàn bộ nguồn lực vào hoạt động sản xuất kinh doanh thương mại thuần túy để tự chủ hoàn toàn ngân sách hoạt động của lực lượng.",
      "D. Mở rộng quy mô quân số thường trực ở tất cả các địa phương nhằm mục tiêu tạo ra nguồn nhân lực lao động sản xuất công nghiệp giá rẻ."
    ],
    "answer": 0
  },
  {
    "question": "Câu 2. Qua nghiên cứu chuyên đề năm 2026, quan niệm về việc Quân đội tham gia lao động sản xuất, kết hợp quốc phòng với kinh tế - xã hội trong kỷ nguyên mới được hiểu như thế nào?",
    "options": [
      "A. Là tổng thể hoạt động thực hiện chức năng, nhiệm vụ cơ bản nhằm gắn kết và phát huy sức mạnh quốc phòng, gia tăng tiềm lực cho quốc gia.",
      "B. Là hoạt động đầu tư tài chính thu lợi nhuận thuần túy của các đơn vị quân đội nhằm tạo nguồn thu riêng ngoài hệ thống ngân sách nhà nước.",
      "C. Là việc chuyển dịch toàn bộ lực lượng quân đội thường trực sang hoạt động sản xuất hàng hóa dân dụng để cạnh tranh trên thị trường.",
      "D. Là nhiệm vụ tạm thời của quân đội trong thời bình nhằm giải quyết việc làm cho hạ sĩ quan và chiến sĩ chuẩn bị xuất ngũ về địa phương."
    ],
    "answer": 0
  },
  {
    "question": "Câu 3. Qua nghiên cứu chuyên đề năm 2026, xuyên suốt tiến trình lịch sử từ khi thành lập đến nay, việc tham gia lao động sản xuất của Quân đội mang lại ý nghĩa thiết thực nào?",
    "options": [
      "A. Tự bảo đảm một phần nhu cầu vật chất, giảm bớt gánh nặng cho nền kinh tế, nâng cao sức mạnh chiến đấu của Quân đội trong mọi tình huống.",
      "B. Giúp Quân đội tự chủ hoàn toàn ngân sách tài chính mà không cần phụ thuộc vào nguồn phân bổ ngân sách hằng năm của Nhà nước ta.",
      "C. Thay thế hoàn toàn vai trò sản xuất của các doanh nghiệp dân sự tại các địa bàn khu vực nông thôn và vùng sâu, vùng xa hiện nay.",
      "D. Tạo ra nguồn doanh thu lớn để chi trả tiền lương và các chế độ đãi ngộ vượt trội cho tất cả các lực lượng vũ trang địa phương hiện nay."
    ],
    "answer": 0
  },
  {
    "question": "Câu 4. Qua nghiên cứu chuyên đề năm 2026, trong những năm qua, việc các Đoàn KT-QP tổ chức quy hoạch, bố trí lại dân cư, hình thành các cụm dân cư tập trung trên vành đai biên giới mang lại giá trị chiến lược gì?",
    "options": [
      "A. Tạo thế bố trí chiến lược mới, củng cố “thế trận lòng dân”, tạo nền tảng vững chắc để xây dựng nền quốc phòng toàn dân trên địa bàn.",
      "B. Mở rộng diện tích đất thổ cư cho người dân đô thị di chuyển về sinh sống nhằm giảm áp lực gia tăng dân số tại các thành phố lớn.",
      "C. Biến tất cả các khu vực đường tuần tra biên giới thành các khu du lịch nghỉ dưỡng sinh thái nhằm thu hút khách du lịch quốc tế.",
      "D. Chuyển đổi toàn bộ đất rừng phòng hộ khu vực biên giới thành các khu công nghiệp tập trung để thu hút vốn đầu tư nước ngoài."
    ],
    "answer": 0
  },
  {
    "question": "Câu 5. Qua nghiên cứu chuyên đề năm 2026, việc phát triển các ngành dịch vụ, doanh nghiệp lưỡng dụng trong Quân đội đóng góp vai trò quan trọng như thế nào?",
    "options": [
      "A. Tránh lãng phí nguồn lực, giảm chi ngân sách nhà nước, đồng thời tiếp nhận, chuyển giao công nghệ để tăng cường tiềm lực quốc phòng.",
      "B. Giúp các doanh nghiệp quân đội chiếm lĩnh toàn bộ thị trường hàng hóa tiêu dùng trong nước và chấm dứt nhập khẩu công nghệ nước ngoài.",
      "C. Đảm bảo toàn bộ các nhà máy quân đội chỉ tập trung sản xuất hàng hóa dân dụng mà không cần duy trì dây chuyền sản xuất quân sự.",
      "D. Cho phép các đơn vị quân đội tự do liên doanh với nước ngoài mà không cần tuân thủ các quy định về bảo mật an ninh quốc gia."
    ],
    "answer": 0
  },
  {
    "question": "Câu 6. Theo tư tưởng Hồ Chí Minh về mối quan hệ biện chứng giữa kinh tế và quốc phòng, Người đã khẳng định kinh tế là nền tảng vật chất quyết định sức mạnh quốc phòng, còn quốc phòng là điều kiện bảo đảm cho kinh tế phát triển. Mối quan hệ này được Bác tóm gọn qua câu nói nào?",
    "options": [
      "A. “Cung cấp đủ súng đạn, đủ cơm áo cho bộ đội thì bộ đội mới đánh thắng trận, điều đó rất rõ ràng dễ hiểu” và “Đánh giặc, trước hết phải có vũ khí”.",
      "B. “Kinh tế phát triển đến đâu thì chúng ta mới tiến hành xây dựng quân đội và củng cố quốc phòng đến đó, không cần làm trước”.",
      "C. “Quân đội chỉ cần tập trung học tập văn hóa và kỹ thuật, việc bảo đảm hậu cần lương thực đã có các cơ quan dân chính đảng lo liệu”.",
      "D. “Sức mạnh của quân đội phụ thuộc hoàn toàn vào số lượng vũ khí hiện đại mua từ nước ngoài chứ không phụ thuộc vào hậu cần”."
    ],
    "answer": 0
  },
  {
    "question": "Câu 7. Báo cáo chính trị trình Đại hội đại biểu toàn quốc lần thứ XIV của Đảng (năm 2026) tiếp tục khẳng định nhiệm vụ trọng tâm nào trong việc kết hợp phát triển kinh tế với củng cố quốc phòng, an ninh trong bối cảnh đất nước bước vào kỷ nguyên mới?",
    "options": [
      "A. Tăng cường tiềm lực quốc gia; kết hợp chặt chẽ, hiệu quả giữa quốc phòng, an ninh với phát triển kinh tế, văn hóa, xã hội và đối ngoại.",
      "B. Tách biệt tuyệt đối giữa nhiệm vụ phát triển kinh tế - xã hội với nhiệm vụ củng cố quốc phòng, an ninh để nâng cao tính chuyên môn.",
      "C. Ưu tiên phát triển kinh tế thị trường bằng mọi giá, giảm mức chi ngân sách cho nhiệm vụ quốc phòng xuống mức thấp nhất có thể.",
      "D. Ngừng triển khai các dự án kinh tế - quốc phòng trên tuyến biên giới để chuyển sang thu hút hoàn toàn vốn đầu tư trực tiếp nước ngoài."
    ],
    "answer": 0
  },
  {
    "question": "Câu 8. Nghị quyết số 44-NQ/TW ngày 24/11/2023 của Ban Chấp hành Trung ương Đảng khóa XIII về “Chiến lược bảo vệ Tổ quốc trong tình hình mới” đã xác định quan điểm chỉ đạo nào sau đây về mối quan hệ giữa kinh tế và quốc phòng?",
    "options": [
      "A. Xây dựng nền kinh tế độc lập, tự chủ, bền vững; kết hợp chặt chẽ phát triển kinh tế - xã hội với tăng cường quốc phòng, an ninh.",
      "B. Tập trung toàn lực cho phát triển kinh tế thương mại, xem nhiệm vụ củng cố quốc phòng an ninh là thứ yếu trong giai đoạn hiện nay.",
      "C. Đẩy mạnh tích lũy tài chính bằng mọi giá trước khi xem xét đầu tư nguồn lực cho việc củng cố thế trận quốc phòng toàn dân.",
      "D. Hạn chế tham gia các hoạt động kinh tế đối ngoại để tập trung nguồn lực duy trì mô hình kinh tế khép kín phục vụ riêng cho quân đội."
    ],
    "answer": 0
  },
  {
    "question": "Câu 9. Qua nghiên cứu chuyên đề năm 2026, trong cuộc kháng chiến chống thực dân Pháp, thực tiễn Quân đội ta tham gia lao động sản xuất và xây dựng kinh tế kết hợp với quốc phòng đã được thể hiện sinh động qua những hoạt động cơ bản nào?",
    "options": [
      "A. Bộ đội vừa chiến đấu vừa tăng gia sản xuất, xây dựng hàng trăm cơ sở quân giới, công binh xưởng để tự bảo đảm hậu cần, vũ khí.",
      "B. Quân đội đứng ra thành lập các tập đoàn tài chính đa quốc gia để mua sắm vũ khí hiện đại từ các nước phương Tây về phục vụ chiến đấu.",
      "C. Toàn bộ cán bộ chiến sĩ dừng hẳn nhiệm vụ huấn luyện quân sự để tập trung làm nông nghiệp trên các nông trường do Pháp để lại.",
      "D. Quân đội chỉ tiếp nhận viện trợ từ bên ngoài mà không tiến hành bất kỳ hoạt động tăng gia sản xuất tự túc nào ở các khu căn cứ."
    ],
    "answer": 0
  },
  {
    "question": "Câu 10. Sau thắng lợi của cuộc kháng chiến chống Mỹ, cứu nước (năm 1975), Quân đội ta đã tiếp tục phát huy mạnh mẽ vai trò tiên phong trên mặt trận lao động sản xuất qua việc đảm nhận các công trình trọng điểm nào của đất nước?",
    "options": [
      "A. Trực tiếp tham gia khai hoang, xây dựng các nông trường và thi công các công trình như đường sắt Thống Nhất, thủy điện Hòa Bình.",
      "B. Đứng ra làm chủ đầu tư xây dựng các khu đô thị thương mại cao cấp và hệ thống trung tâm mua sắm lớn tại thành phố Hồ Chí Minh.",
      "C. Tập trung nguồn lực xây dựng các sân bay nội địa phục vụ riêng cho mục đích thương mại du lịch tại các tỉnh đồng bằng sông Cửu Long.",
      "D. Ngừng các hoạt động làm kinh tế để chuyển toàn bộ lực lượng về làm nhiệm vụ canh gác tại các cơ quan hành chính nhà nước."
    ],
    "answer": 0
  },
  {
    "question": "Câu 11. Qua nghiên cứu chuyên đề năm 2026, nội dung thứ nhất về Quân đội tham gia lao động sản xuất trong tình hình mới được tài liệu xác định là tiên phong trong xây dựng mô hình nào dưới đây nhằm kết hợp phát triển kinh tế - xã hội với củng cố quốc phòng?",
    "options": [
      "A. Tiên phong trong xây dựng các khu kinh tế - quốc phòng trên các địa bàn chiến lược, biên giới, hải đảo của Tổ quốc.",
      "B. Tiên phong trong việc xây dựng các khu công nghiệp chế xuất dành riêng cho các doanh nghiệp 100% vốn đầu tư nước ngoài.",
      "C. Tiên phong trong việc quy hoạch các khu trung tâm thương mại tự do tại các thành phố lớn để thu hút nguồn vốn tiêu dùng.",
      "D. Tiên phong trong việc xây dựng các khu nghỉ dưỡng sinh thái cao cấp dành riêng cho đối tượng khách du lịch quốc tế."
    ],
    "answer": 0
  },
  {
    "question": "Câu 12. Qua nghiên cứu chuyên đề năm 2026, nội dung thứ hai trong nhiệm vụ Quân đội tham gia lao động sản xuất tình hình mới là tiên phong trong phát triển công nghiệp quốc phòng. Định hướng phát triển công nghiệp quốc phòng được xác định như thế nào?",
    "options": [
      "A. Phát triển theo hướng hiện đại, lưỡng dụng, gắn kết chặt chẽ với công nghiệp dân sinh, hình thành hệ thống sản xuất tự chủ.",
      "B. Phát triển theo hướng chuyên môn hóa hẹp, chỉ tập trung sản xuất vũ khí đạn dược và hoàn toàn tách biệt với nền kinh tế dân sinh.",
      "C. Tập trung toàn bộ nguồn lực để nhập khẩu dây chuyền sản xuất hàng tiêu dùng gia dụng từ các nước phát triển về lắp ráp.",
      "D. Chuyển toàn bộ các nhà máy công nghiệp quốc phòng sang sản xuất hàng xuất khẩu để lấy tiền mua vũ khí hoàn chỉnh từ bên ngoài."
    ],
    "answer": 0
  },
  {
    "question": "Câu 13. Qua nghiên cứu chuyên đề năm 2026, nhằm bảo đảm sự hài hòa giữa hiệu quả kinh tế và thực hiện nhiệm vụ quốc phòng, nội dung thứ ba trong nhiệm vụ Quân đội tham gia lao động sản xuất yêu cầu các doanh nghiệp quân đội phải vận hành theo cơ chế nào?",
    "options": [
      "A. Tiên phong phát triển doanh nghiệp quân đội gắn kết nhiệm vụ sản xuất kinh doanh với quốc phòng, vận hành theo cơ chế thị trường định hướng XHCN.",
      "B. Vận hành theo cơ chế bao cấp hoàn toàn từ ngân sách nhà nước, không cần quan tâm đến hiệu quả tài chính và năng lực cạnh tranh.",
      "C. Vận hành theo mô hình tự do cạnh tranh tư bản chủ nghĩa, tối đa hóa lợi nhuận tài chính mà không cần gánh vác nhiệm vụ quốc phòng.",
      "D. Cho phép các doanh nghiệp quân đội tự do nhượng quyền thương hiệu cho các công ty tư nhân để thu phí bản quyền hằng năm."
    ],
    "answer": 0
  },
  {
    "question": "Câu 14. Qua nghiên cứu chuyên đề năm 2026, hoạt động tăng gia sản xuất ở các đơn vị quân đội không chỉ bảo đảm đời sống vật chất, tinh thần cho bộ đội mà còn mang ý nghĩa chiến lược quan trọng nào đối với củng cố tiềm lực quốc phòng?",
    "options": [
      "A. Thể hiện tinh thần tự lực, tự cường, củng cố “thế trận lòng dân”, tăng cường mối quan hệ gắn bó máu thịt giữa quân và dân.",
      "B. Giúp các đơn vị quân đội có thể tích lũy tài chính để tự mua sắm các loại vũ khí hạng nặng mà không cần báo cáo cấp trên.",
      "C. Tạo ra nguồn nông sản giá rẻ để xuất khẩu cạnh tranh trực tiếp với các mặt hàng nông sản của bà con nông dân trên thị trường.",
      "D. Giúp cắt giảm toàn bộ tiêu chuẩn tiền ăn hằng ngày của người lính do Nhà nước chi trả để dồn tiền cho các quỹ đầu tư rủi ro."
    ],
    "answer": 0
  },
  {
    "question": "Câu 15. Qua nghiên cứu chuyên đề năm 2026, hình thức tham gia lao động sản xuất trực tiếp của Quân đội nhân dân Việt Nam bao gồm những tổ chức, lực lượng cơ bản nào dưới đây?",
    "options": [
      "A. Các đoàn kinh tế - quốc phòng, các tổng công ty, công ty, tập đoàn và doanh nghiệp thuộc Bộ Quốc phòng trực tiếp sản xuất.",
      "B. Các hội nghề nghiệp dân sự, các quỹ từ thiện xã hội và các câu lạc bộ thể thao thuộc quản lý của các chính quyền địa phương.",
      "C. Các đơn vị bộ đội chủ lực làm nhiệm vụ huấn luyện, sẵn sàng chiến đấu trên các địa bàn trọng điểm mà không tham gia kinh doanh.",
      "D. Các hệ thống đại lý bán lẻ hàng tiêu dùng tư nhân ký hợp đồng nhượng quyền thương mại với các cơ quan quân sự địa phương."
    ],
    "answer": 0
  },
  {
    "question": "Câu 16. Qua nghiên cứu chuyên đề năm 2026, việc cán bộ, chiến sĩ và người lao động trực tiếp tham gia vào các hoạt động lao động sản xuất trong các doanh nghiệp, đoàn kinh tế - quốc phòng giúp mang lại sự chuyển biến quan trọng nào về mặt tư tưởng?",
    "options": [
      "A. Nhận thức sâu sắc vai trò kép của Quân đội, xóa bỏ tư tưởng trông chờ, ỷ lại, khẳng định tính chính danh của người lính Cụ Hồ.",
      "B. Giúp người lính nhận thức rằng nhiệm vụ sản xuất kinh doanh thu lợi nhuận là mục tiêu duy nhất và quan trọng nhất của quân đội.",
      "C. Nâng cao tâm lý muốn rời bỏ lực lượng vũ trang để chuyển sang làm việc hoàn toàn cho các công ty kinh doanh tư nhân bên ngoài.",
      "D. Tạo ra tâm lý coi trọng hoạt động thương mại hơn nhiệm vụ huấn luyện sẵn sàng chiến đấu tại các đơn vị quân đội thường trực."
    ],
    "answer": 0
  },
  {
    "question": "Câu 17. Qua nghiên cứu chuyên đề năm 2026, hình thức tham gia lao động sản xuất gián tiếp của Quân đội nhân dân Việt Nam bao gồm những hoạt động phong phú và thiết thực nào dưới đây?",
    "options": [
      "A. Tăng gia sản xuất tại đơn vị, giúp nhân dân phòng chống thiên tai, xóa đói giảm nghèo, xây dựng nông thôn mới trên địa bàn.",
      "B. Thành lập các công ty tài chính chứng khoán để huy động vốn góp từ cán bộ chiến sĩ và nhân dân trên địa bàn đóng quân.",
      "C. Trực tiếp thu thuế kinh doanh của các hộ gia đình và doanh nghiệp dân sự đóng trên địa bàn để bổ sung vào quỹ đơn vị.",
      "D. Cho thuê các trang thiết bị quân sự chuyên dụng cho các tổ chức tư nhân tổ chức các sự kiện giải trí thương mại thu tiền."
    ],
    "answer": 0
  },
  {
    "question": "Câu 18. Qua nghiên cứu chuyên đề năm 2026, giải pháp quan trọng hàng đầu, có ý nghĩa quyết định thắng lợi đối với việc nâng cao hiệu quả thực hiện nhiệm vụ Quân đội tham gia lao động sản xuất, kết hợp quốc phòng với kinh tế - xã hội trong tình hình mới là gì?",
    "options": [
      "A. Tăng cường sự lãnh đạo, chỉ đạo của cấp ủy, chỉ huy các cấp đối với nhiệm vụ tham gia lao động sản xuất, kết hợp quốc phòng với kinh tế.",
      "B. Cắt giảm toàn bộ ngân sách nhà nước cấp cho các đơn vị quân đội làm kinh tế để ép các đơn vị phải tự xoay xở tài chính hoàn toàn.",
      "C. Chuyển giao toàn bộ quyền lãnh đạo các doanh nghiệp quân đội cho các hiệp hội doanh nghiệp tư nhân đứng ra điều hành kinh doanh.",
      "D. Tập trung toàn bộ quân số lực lượng thường trực vào làm kinh tế thương mại, hoãn các nhiệm vụ huấn luyện quân sự hằng năm."
    ],
    "answer": 0
  },
  {
    "question": "Câu 19. Qua nghiên cứu chuyên đề năm 2026, cấp ủy, chỉ huy các cấp trong toàn quân cần chủ động kiên quyết đấu tranh, phản bác các quan điểm sai trái, xuyên tạc của các thế lực thù địch nhằm mục đích đen tối nào sau đây?",
    "options": [
      "A. Phản bác quan điểm đòi tách rời kinh tế với quốc phòng, phủ nhận chức năng “đội quân lao động sản xuất”, đòi “phi chính trị hóa” Quân đội.",
      "B. Phản bác các chính sách ưu đãi thuế của Nhà nước dành cho các doanh nghiệp hoạt động tại các khu vực biên giới, hải đảo xa xôi.",
      "C. Phản bác các chương trình mục tiêu quốc gia về xóa đói giảm nghèo bền vững đang được triển khai tại các vùng đồng bào dân tộc.",
      "D. Phản bác việc ứng dụng công nghệ thông tin và chuyển đổi số vào công tác quản lý điều hành doanh nghiệp quân đội hiện nay."
    ],
    "answer": 0
  },
  {
    "question": "Câu 20. Qua nghiên cứu chuyên đề năm 2026, để nâng cao hiệu quả hoạt động của các Khu kinh tế - quốc phòng trên các hướng biển, đảo và biên giới đất liền, các cơ quan chức năng của Bộ Quốc phòng cần chú trọng ưu tiên thực hiện giải pháp nào?",
    "options": [
      "A. Phân kỳ đầu tư, quản lý sử dụng hiệu quả nguồn lực, đầu tư có trọng tâm trọng điểm, lồng ghép dự án với các chương trình quốc gia.",
      "B. Dàn trải nguồn vốn đầu tư đều khắp tất cả các địa bàn mà không cần quan tâm đến tính chiến lược và thứ tự ưu tiên phòng thủ.",
      "C. Yêu cầu người dân tại các khu kinh tế - quốc phòng phải tự túc hoàn toàn vốn xây dựng hạ tầng mà không có sự hỗ trợ của Nhà nước.",
      "D. Tập trung xây dựng các khu vui chơi giải trí quy mô lớn tại các đảo xa để thu hút nguồn vốn đầu tư từ các tập đoàn đa quốc gia."
    ],
    "answer": 0
  },
  {
    "question": "Câu 21. Qua nghiên cứu chuyên đề năm 2026, mô hình tổ chức sản xuất tại các Khu kinh tế - quốc phòng được định hướng tổ chức lại như thế nào để phát huy tốt nhất hiệu quả hỗ trợ nhân dân vùng biên giới, vùng đặc biệt khó khăn?",
    "options": [
      "A. Tập trung ưu tiên phát triển kinh tế hộ gia đình; đẩy mạnh dịch vụ hai đầu giúp dân phát triển kinh tế, giữ vai trò “bà đỡ” cho dân.",
      "B. Thu hồi toàn bộ đất sản xuất của người dân địa phương để thành lập các nông trường lớn do bộ đội trực tiếp quản lý và canh tác.",
      "C. Yêu cầu bà con nhân dân phải nộp lại toàn bộ sản phẩm nông nghiệp thu hoạch được cho Đoàn kinh tế - quốc phòng để bán đấu giá.",
      "D. Ngừng cung cấp giống và kỹ thuật nông nghiệp cho người dân để họ tự tìm kiếm các nguồn hỗ trợ từ các tổ chức nước ngoài."
    ],
    "answer": 0
  },
  {
    "question": "Câu 22. Qua nghiên cứu chuyên đề năm 2026, trong quá trình tái cơ cấu và phát triển sản xuất kinh doanh, các doanh nghiệp quân đội được yêu cầu phải tuân thủ nghiêm ngặt nguyên tắc cốt lõi nào dưới đây để tránh rủi ro tài chính và tiêu cực?",
    "options": [
      "A. Tập trung nâng cao hiệu quả ngành nghề chính, không đầu tư dàn trải, không kinh doanh ngoài ngành và lĩnh vực nhạy cảm dễ tiêu cực.",
      "B. Sử dụng toàn bộ đất quốc phòng được giao để liên doanh thành lập các sàn giao dịch bất động sản thương mại thu lợi nhuận.",
      "C. Tự do vay nợ tín dụng vượt quá khả năng chi trả để đầu tư vào các thị trường tài chính mạo hiểm ngoài phạm vi quản lý.",
      "D. Che giấu thông tin tài chính và tránh sự kiểm tra, thanh tra của các cơ quan quản lý nhà nước cũng như các cơ quan của Bộ Quốc phòng."
    ],
    "answer": 0
  },
  {
    "question": "Câu 23. Qua nghiên cứu chuyên đề năm 2026, nhằm nâng cao hiệu quả quản trị doanh nghiệp quân đội theo hướng hiện đại, Chính phủ và Quân ủy Trung ương đã chỉ đạo thực hiện đổi mới quan trọng nào trong công tác quản lý?",
    "options": [
      "A. Sớm thực hiện tách chức năng quản lý nhà nước, đại diện chủ sở hữu vốn của các cơ quan với hoạt động sản xuất kinh doanh của doanh nghiệp.",
      "B. Tăng cường sự can thiệp trực tiếp bằng mệnh lệnh hành chính của các cơ quan quân sự vào các quyết định kinh doanh hằng ngày.",
      "C. Bỏ qua các quy định của Luật Doanh nghiệp để áp dụng hoàn toàn Điều lệnh quản lý bộ đội vào hoạt động điều hành sản xuất.",
      "D. Yêu cầu các Giám đốc doanh nghiệp quân đội phải chịu sự quản lý trực tiếp về tài chính từ các chính quyền địa phương sở tại."
    ],
    "answer": 0
  },
  {
    "question": "Câu 24. Qua nghiên cứu chuyên đề năm 2026, đối với các đơn vị thường trực và đơn vị sự nghiệp công lập trong Quân đội, việc tổ chức hoạt động tăng gia sản xuất và làm kinh tế phải bảo đảm nguyên tắc căn bản nào?",
    "options": [
      "A. Phát huy thế mạnh tại chỗ, phục vụ cải thiện đời sống bộ đội, chấp hành đúng pháp luật Nhà nước và quy định của Bộ Quốc phòng.",
      "B. Cho phép cán bộ chiến sĩ bỏ nhiệm vụ huấn luyện để ra ngoài làm dịch vụ tư nhân lấy tiền nộp vào quỹ vốn của cơ quan đơn vị.",
      "C. Sử dụng toàn bộ lực lượng vũ trang thường trực vào việc nhận thi công các công trình dân dụng tư nhân để thu tiền chênh lệch.",
      "D. Tự do tổ chức các hoạt động kinh doanh thương mại công khai mà không cần đăng ký hay quản lý nguồn thu theo quy định."
    ],
    "answer": 0
  },
  {
    "question": "Câu 25. Qua nghiên cứu chuyên đề năm 2026, các trung tâm nghiên cứu khoa học, cơ sở đào tạo và bệnh viện quân đội được phép phát triển các hoạt động dịch vụ theo hướng nào để vừa hoàn thành nhiệm vụ chính trị vừa đóng góp cho phát triển kinh tế?",
    "options": [
      "A. Nâng cao chất lượng dịch vụ gắn với kỹ thuật chuyên môn theo đúng quy định, tạo thêm nguồn thu để tái đầu tư nâng cao năng lực hoạt động.",
      "B. Chuyển hoàn toàn sang khám chữa bệnh và đào tạo thương mại giá cao, từ chối phục vụ các đối tượng chính sách và quân nhân.",
      "C. Tách khỏi sự quản lý của Bộ Quốc phòng để hoạt động như một đơn vị tư nhân hoàn toàn độc lập trên thị trường tự do.",
      "D. Ngừng công tác nghiên cứu khoa học ứng dụng quân sự để tập trung sản xuất các sản phẩm tiêu dùng giá rẻ bán ra thị trường."
    ],
    "answer": 0
  },
  {
    "question": "Câu 26. Qua nghiên cứu chuyên đề năm 2026, định hướng kết hợp giữa hoạt động đối ngoại quốc phòng với hoạt động kinh tế đối ngoại của các doanh nghiệp quân đội trong giai đoạn hiện nay được xác định như thế nào?",
    "options": [
      "A. Lựa chọn đối tác phù hợp, mở rộng hợp tác công nghệ cao, công nghệ lưỡng dụng, tuân thủ pháp luật và bảo vệ an ninh quốc gia.",
      "B. Bằng mọi giá tìm kiếm lợi nhuận từ đối tác nước ngoài mà không cần quan tâm đến các quy định bảo vệ bí mật quân sự.",
      "C. Chỉ mở rộng hợp tác kinh tế đối ngoại với các công ty nhỏ lẻ và từ chối hợp tác với các tập đoàn công nghệ lớn trên thế giới.",
      "D. Chuyển giao toàn bộ bản quyền công nghệ sản xuất vũ khí trang bị của quân đội cho các đối tác nước ngoài để lấy nguồn vốn."
    ],
    "answer": 0
  },
  {
    "question": "Câu 27. Qua nghiên cứu chuyên đề năm 2026, mục tiêu quan trọng nhất của việc tăng cường hợp tác quốc tế về công nghiệp quốc phòng và thương mại quân sự của các doanh nghiệp quân đội là gì?",
    "options": [
      "A. Tranh thủ nguồn lực về vốn, khoa học - công nghệ và trình độ quản lý, nâng cao năng lực tự chủ sản xuất vũ khí trang bị hiện đại.",
      "B. Phụ thuộc hoàn toàn vào nguồn cung cấp vũ khí nguyên chiếc từ bên ngoài để không cần duy trì các nhà máy sản xuất trong nước.",
      "C. Nhập khẩu toàn bộ trang thiết bị cũ lạc hậu của nước ngoài về để tiết kiệm chi phí mua sắm cho ngân sách nhà nước.",
      "D. Biến các doanh nghiệp công nghiệp quốc phòng thành các đại lý phân phối hàng hóa tiêu dùng cho các tập đoàn nước ngoài."
    ],
    "answer": 0
  },
  {
    "question": "Câu 28. Văn bản pháp lý quan trọng do Chính phủ ban hành ngày 21/12/2018 tạo khung khổ pháp lý đồng bộ cho việc thực hiện kết hợp giữa phát triển kinh tế - xã hội với củng cố quốc phòng, an ninh là văn bản nào?",
    "options": [
      "A. Nghị định số 164/2018/NĐ-CP về kết hợp quốc phòng với kinh tế - xã hội và kinh tế - xã hội với quốc phòng.",
      "B. Quyết định số 30/2008/QĐ-TTg về việc thành lập các tập đoàn kinh tế tư nhân lớn tại các vùng biên giới hải đảo.",
      "C. Thông tư số 69/2017/TT-BQP ban hành Quy chế quản lý các hoạt động đầu tư chứng khoán của doanh nghiệp quân đội.",
      "D. Luật Doanh nghiệp sửa đổi quy định về việc miễn toàn bộ nghĩa vụ thuế hằng năm cho các cơ sở sản xuất quân sự."
    ],
    "answer": 0
  },
  {
    "question": "Câu 29. Qua nghiên cứu chuyên đề năm 2026, khi trực tiếp hoặc gián tiếp tham gia vào các hoạt động lao động sản xuất, cán bộ sĩ quan và quân nhân chuyên nghiệp phải tuân thủ nghiêm ngặt hệ thống quy định nào?",
    "options": [
      "A. Thực hiện tích cực, đúng các quy định của pháp luật nước Cộng hòa xã hội chủ nghĩa Việt Nam và kỷ luật nghiêm minh của Quân đội.",
      "B. Tự do áp dụng các luật lệ kinh doanh tự phát ngoài thị trường mà không cần quan tâm đến các Điều lệnh quản lý bộ đội.",
      "C. Chỉ tuân thủ theo sự sắp xếp của các đối tác kinh doanh tư nhân bên ngoài mà không cần báo cáo qua hệ thống chỉ huy đơn vị.",
      "D. Ưu tiên tối đa hóa lợi nhuận cá nhân và lợi ích nhóm trước khi xét đến việc chấp hành các quy định pháp luật của Nhà nước."
    ],
    "answer": 0
  },
  {
    "question": "Câu 30. Qua nghiên cứu chuyên đề năm 2026, việc tích cực tham gia lao động sản xuất, tăng gia cải thiện đời sống ở các đơn vị cơ sở mang lại giá trị rèn luyện thực tiễn nào cho đội ngũ cán bộ, chiến sĩ Quân đội?",
    "options": [
      "A. Rèn luyện tinh thần tập thể, tác phong lao động có kỷ luật, nâng cao trình độ chuyên môn kỹ thuật và giữ vững phẩm chất “Bộ đội Cụ Hồ”.",
      "B. Tạo tâm lý thực dụng, coi trọng giá trị tiền bạc hơn các giá trị đạo đức cách mạng và tinh thần sẵn sàng hy sinh vì Tổ quốc.",
      "C. Giúp cán bộ chiến sĩ tích lũy tài sản cá nhân để chuẩn bị cho việc rời bỏ Quân đội ra ngoài thành lập doanh nghiệp riêng.",
      "D. Giảm bớt ý thức chấp hành kỷ luật quân sự do công việc lao động sản xuất đòi hỏi sự tự do không tuân theo giờ giấc."
    ],
    "answer": 0
  },
  {
    "question": "Câu 1. Qua nghiên cứu chuyên đề năm 2026, “sự cố truyền thông” được hiểu là gì?",
    "options": [
      "A. Sự việc có sức lan truyền rất lớn",
      "B. Sự việc đơn lẻ, quy mô hẹp, còn khả năng kiểm soát",
      "C. Khủng hoảng đã ảnh hưởng toàn xã hội",
      "D. Vụ việc đã trở thành vấn đề chính trị - xã hội được mọi người quan tâm"
    ],
    "answer": 1
  },
  {
    "question": "Câu 2. Qua nghiên cứu chuyên đề năm 2026, “khủng hoảng truyền thông” khác với “sự cố truyền thông” chủ yếu ở điểm nào?",
    "options": [
      "A. Mức độ tác động và khả năng kiểm soát",
      "B. Thời gian xảy ra và địa điểm",
      "C. Chủ thể gây ra sự việc và mức độ ảnh hưởng",
      "D. Hình thức thông tin ban đầu và cách xử lý"
    ],
    "answer": 0
  },
  {
    "question": "Câu 3. Qua nghiên cứu chuyên đề năm 2026, mối quan hệ giữa sự cố và khủng hoảng truyền thông được xác định là gì?",
    "options": [
      "A. Hai hiện tượng độc lập",
      "B. Sự cố là nguyên nhân duy nhất",
      "C. Sự cố là mầm mống, khủng hoảng là hệ quả",
      "D. Khủng hoảng luôn xảy ra trước sự cố"
    ],
    "answer": 2
  },
  {
    "question": "Câu 4. Qua nghiên cứu chuyên đề năm 2026, ba đặc điểm cốt lõi để nhận diện khủng hoảng truyền thông ở đơn vị cơ sở là gì?",
    "options": [
      "A. Nhanh, rộng, phức tạp",
      "B. Đột ngột, lan truyền nhanh, tổn hại lớn",
      "C. Bất ngờ, chính trị, quân sự",
      "D. Nhạy cảm, phức tạp, kéo dài"
    ],
    "answer": 1
  },
  {
    "question": "Câu 5. Qua nghiên cứu chuyên đề năm 2026, “Lan truyền nhanh” trong khủng hoảng truyền thông hiện nay chủ yếu gắn với đặc điểm nào của không gian mạng?",
    "options": [
      "A. Không có tương tác",
      "B. Tốc độ lan truyền rất cao",
      "C. Phạm vi thông tin hẹp",
      "D. Nội dung khó chia sẻ"
    ],
    "answer": 1
  },
  {
    "question": "Câu 6. Qua nghiên cứu chuyên đề năm 2026, “thời gian vàng” trong xử lý khủng hoảng truyền thông thường được xác định là:",
    "options": [
      "A. Dưới 24 giờ",
      "B. Từ 24 đến 48 giờ",
      "C. Trong một tuần",
      "D. Sau khi có kết luận"
    ],
    "answer": 0
  },
  {
    "question": "Câu 7. Qua nghiên cứu chuyên đề năm 2026, một nguyên nhân chủ quan hàng đầu dẫn đến khủng hoảng truyền thông ở đơn vị là:",
    "options": [
      "A. Thiếu trang thiết bị, kỹ thuật hiện đại",
      "B. Vi phạm pháp luật, kỷ luật của quân nhân",
      "C. Thiếu hoạt động đối ngoại, ngoại giao nhân dân",
      "D. Thiếu chương trình văn hóa, văn nghệ, thể dục thể thao"
    ],
    "answer": 1
  },
  {
    "question": "Câu 8. Qua nghiên cứu chuyên đề năm 2026, hành vi nào sau đây có thể trở thành nguồn gốc của khủng hoảng truyền thông?",
    "options": [
      "A. Vi phạm kỷ luật",
      "B. Sai sót nghiệp vụ",
      "C. Phát ngôn thiếu chuẩn mực",
      "D. Tất cả đáp án đã nêu"
    ],
    "answer": 3
  },
  {
    "question": "Câu 9. Qua nghiên cứu chuyên đề năm 2026, việc lãnh đạo, chỉ huy bao che, giấu giếm khuyết điểm hoặc báo cáo không trung thực ảnh hưởng như thế nào đến xử lý khủng hoảng truyền thông?",
    "options": [
      "A. Làm sự việc lắng xuống",
      "B. Làm khủng hoảng trầm trọng thêm",
      "C. Giảm áp lực dư luận",
      "D. Hạn chế thông tin xấu"
    ],
    "answer": 1
  },
  {
    "question": "Câu 10. Qua nghiên cứu chuyên đề năm 2026, khủng hoảng truyền thông không được xử lý kịp thời có thể gây hậu quả nào?",
    "options": [
      "A. Xói mòn niềm tin của Nhân dân",
      "B. Tăng cường đoàn kết quân dân",
      "C. Nâng cao uy tín đơn vị",
      "D. Tăng hiệu quả huấn luyện"
    ],
    "answer": 0
  },
  {
    "question": "Câu 11. Qua nghiên cứu chuyên đề năm 2026, khủng hoảng truyền thông có thể tác động trực tiếp đến?",
    "options": [
      "A. Khả năng hoàn thành nhiệm vụ của đơn vị",
      "B. Hoạt động văn hóa, văn nghệ, thể dục thể thao",
      "C. Công tác hậu cần, tài chính",
      "D. Hoạt động đối ngoại"
    ],
    "answer": 0
  },
  {
    "question": "Câu 12. Qua nghiên cứu chuyên đề năm 2026, khủng hoảng truyền thông được phân thành bao nhiêu cấp độ?",
    "options": [
      "A. 2 cấp",
      "B. 3 cấp",
      "C. 4 cấp",
      "D. 5 cấp"
    ],
    "answer": 1
  },
  {
    "question": "Câu 13. Qua nghiên cứu chuyên đề năm 2026, cấp độ 1 của khủng hoảng truyền thông được xác định là gì?",
    "options": [
      "A. Khủng hoảng nghiêm trọng",
      "B. Khủng hoảng tiềm ẩn",
      "C. Cục bộ",
      "D. Toàn diện"
    ],
    "answer": 2
  },
  {
    "question": "Câu 14. Qua nghiên cứu chuyên đề năm 2026, đặc điểm của cấp độ 2 của khủng hoảng truyền thông là gì?",
    "options": [
      "A. Thông tin mới xuất hiện, dễ kiểm soát",
      "B. Thông tin đã lan rộng trên nhiều nền tảng mạng xã hội",
      "C. Thông tin có nguy cơ suy diễn, quy chụp và bắt đầu lan rộng",
      "D. Khủng hoảng đã tác động toàn hệ thống"
    ],
    "answer": 2
  },
  {
    "question": "Câu 15. Qua nghiên cứu chuyên đề năm 2026, cấp độ 3 của khủng hoảng truyền thông được xác định là gì?",
    "options": [
      "A. Cục bộ",
      "B. Tiềm ẩn gây nguy hiểm",
      "C. Có dấu hiệu lan rộng",
      "D. Khủng hoảng nghiêm trọng"
    ],
    "answer": 3
  },
  {
    "question": "Câu 16. Qua nghiên cứu chuyên đề năm 2026, mục tiêu đầu tiên trong xử lý khủng hoảng truyền thông là gì?",
    "options": [
      "A. Truy tìm người đưa tin",
      "B. Giảm thiểu tối đa thiệt hại",
      "C. Đưa vụ việc ra công luận",
      "D. Xử lý thông tin trên mạng"
    ],
    "answer": 1
  },
  {
    "question": "Câu 17. Qua nghiên cứu chuyên đề năm 2026, nguyên tắc đầu tiên trong xử lý khủng hoảng truyền thông là gì?",
    "options": [
      "A. Cung cấp thông tin ngay cho các cơ quan chức năng",
      "B. Bảo đảm sự lãnh đạo tuyệt đối, trực tiếp của tổ chức Đảng",
      "C. Xử lý người vi phạm đúng pháp luật",
      "D. Công khai mọi thông tin lên các trang mạng để mọi người biết"
    ],
    "answer": 1
  },
  {
    "question": "Câu 18. Qua nghiên cứu chuyên đề năm 2026, khi xử lý khủng hoảng truyền thông, yêu cầu về tốc độ là gì?",
    "options": [
      "A. Phản ứng trong ngày",
      "B. Phản ứng trong tuần",
      "C. Phản ứng nhanh, đi trước một bước",
      "D. Chờ thông tin đầy đủ rồi mới xử lý"
    ],
    "answer": 2
  },
  {
    "question": "Câu 19. Qua nghiên cứu chuyên đề năm 2026, khi cung cấp thông tin trong khủng hoảng truyền thông, yêu cầu quan trọng là gì?",
    "options": [
      "A. Càng nhiều càng tốt",
      "B. Chính xác và thống nhất",
      "C. Càng nhanh càng tốt",
      "D. Chỉ cung cấp trên mạng xã hội"
    ],
    "answer": 1
  },
  {
    "question": "Câu 20. Qua nghiên cứu chuyên đề năm 2026, trong xử lý khủng hoảng, yêu cầu ưu tiên như thế nào?",
    "options": [
      "A. Truyền thông trước, xử lý sau",
      "B. Xử lý nguyên nhân gốc rễ trước",
      "C. Gỡ bỏ mọi thông tin trên mạng",
      "D. Chờ cấp trên xử lý"
    ],
    "answer": 1
  },
  {
    "question": "Câu 1. Qua nghiên cứu chuyên đề năm 2026, tự do, dân chủ, nhân quyền được xác định là phạm trù thuộc những lĩnh vực nào và ra đời cùng với thể chế nào trong lịch sử?",
    "options": [
      "A. Là phạm trù kinh tế, kỹ thuật, công nghệ ra đời cùng với sự xuất hiện của công cụ lao động bằng kim loại.",
      "B. Là phạm trù đạo đức, tôn giáo thuần túy ra đời từ khi con người bắt đầu xuất hiện trên trái đất.",
      "C. Là phạm trù chính trị, pháp luật, văn hóa - xã hội ra đời cùng với Nhà nước trong xã hội có giai cấp.",
      "D. Là phạm trù quân sự, an ninh quốc gia ra đời cùng với sự xuất hiện của các cuộc chiến tranh tranh giành lãnh thổ."
    ],
    "answer": 2
  },
  {
    "question": "Câu 2. Trong Bản Tuyên ngôn Độc lập năm 1945, Chủ tịch Hồ Chí Minh đã khẳng định những quyền cơ bản nào của con người xuất phát từ tạo hóa?",
    "options": [
      "A. Quyền được sống, quyền tự do và quyền mưu cầu hạnh phúc.",
      "B. Quyền sở hữu tư liệu sản xuất, quyền tự do kinh doanh không giới hạn và quyền miễn trừ pháp lý.",
      "C. Quyền can thiệp vào công việc nội bộ quốc gia khác và quyền tự do tham gia các hội nhóm vũ trang.",
      "D. Quyền bãi công, đình công tự do và quyền tuyệt đối hóa lợi ích cá nhân trên lợi ích dân tộc."
    ],
    "answer": 0
  },
  {
    "question": "Câu 3. Hai Công ước quốc tế quan trọng về nhân quyền được Liên hợp quốc thông qua năm 1966 đã hình thành nên hai nhóm quyền cơ bản nào?",
    "options": [
      "A. Nhóm quyền dân sự, chính trị và nhóm quyền kinh tế, xã hội, văn hóa.",
      "B. Nhóm quyền an ninh, quân sự và nhóm quyền phát triển công nghệ, thông tin truyền thông.",
      "C. Nhóm quyền tự do cá nhân tuyệt đối và nhóm quyền can thiệp nhân đạo quốc tế.",
      "D. Nhóm quyền của các quốc gia phát triển và nhóm quyền của các quốc gia đang phát triển."
    ],
    "answer": 0
  },
  {
    "question": "Câu 4. Trong bản Tuyên ngôn Độc lập năm 1945, Chủ tịch Hồ Chí Minh đã nâng tầm quyền con người thành quyền gì của các dân tộc trên thế giới?",
    "options": [
      "A. Tất cả các dân tộc đều bình đẳng, có quyền sống, quyền sung sướng và quyền tự do.",
      "B. Các dân tộc lớn có quyền áp đặt mô hình phát triển và giá trị dân chủ lên các dân tộc nhỏ yếu.",
      "C. Quyền được ưu tiên phát triển kinh tế tư nhân trước khi thực hiện các quyền tự do chính trị.",
      "D. Quyền tự do gia nhập các liên minh quân sự quốc tế mà không cần xem xét điều kiện an ninh."
    ],
    "answer": 0
  },
  {
    "question": "Câu 5. Quan điểm nhất quán của Đảng ta qua các kỳ Đại hội về mối quan hệ giữa dân chủ, kỷ luật và pháp luật là gì?",
    "options": [
      "A. Dân chủ là tuyệt đối, không cần bị hạn chế bởi kỷ luật hay các quy định của hệ thống pháp luật.",
      "B. Kỷ luật và pháp luật là công cụ nhằm hạn chế, triệt tiêu các quyền tự do dân chủ của nhân dân.",
      "C. Dân chủ chỉ áp dụng trong đời sống xã hội, còn trong cơ quan nhà nước phải dùng kỷ luật hành chính.",
      "D. Dân chủ phải đi đôi với kỷ luật, được thể chế hóa bằng pháp luật và được pháp luật bảo vệ."
    ],
    "answer": 3
  },
  {
    "question": "Câu 6. Điểm khác biệt căn bản trong việc thực hành nhân quyền ở Việt Nam so với các quan điểm trừu tượng là gì?",
    "options": [
      "A. Thể chế hóa thành Hiến pháp, pháp luật cụ thể, điều chỉnh hài hòa quyền cá nhân với quyền cộng đồng.",
      "B. Áp dụng nguyên xi các chuẩn mực nhân quyền phổ quát chung chung mà không cần sửa đổi luật trong nước.",
      "C. Chỉ tập trung bảo vệ quyền của các nhóm thiểu số mà bỏ qua quyền lợi chung của toàn thể nhân dân.",
      "D. Tuyệt đối hóa quyền cá nhân trên hết, xem nhẹ trách nhiệm và nghĩa vụ của công dân đối với đất nước."
    ],
    "answer": 0
  },
  {
    "question": "Câu 7. Điều 3 Hiến pháp năm 2013 của nước Cộng hòa xã hội chủ nghĩa Việt Nam quy định trách nhiệm của Nhà nước như thế nào đối với quyền con người?",
    "options": [
      "A. Chỉ công nhận các quyền kinh tế, còn các quyền chính trị - xã hội sẽ do các tổ chức tư nhân đảm nhiệm.",
      "B. Bảo đảm, phát huy quyền làm chủ của Nhân dân; công nhận, tôn trọng, bảo vệ, bảo đảm quyền con người.",
      "C. Hạn chế quyền làm chủ của Nhân dân để tập trung nguồn lực phát triển kinh tế hạ tầng quốc gia.",
      "D. Áp dụng các tiêu chuẩn nhân quyền quốc tế một cách thụ động theo yêu cầu của các tổ chức bên ngoài."
    ],
    "answer": 1
  },
  {
    "question": "Câu 8. Quan điểm chỉ đạo xuyên suốt về Nhân dân được Đại hội XIV của Đảng tiếp tục nhấn mạnh là gì?",
    "options": [
      "A. “Dân là gốc”, xác định nhân dân là trung tâm, chủ thể, mục tiêu, động lực và nguồn lực phát triển.",
      "B. Nhân dân là đối tượng quản lý thụ động của các cơ quan chính quyền và hệ thống pháp luật.",
      "C. Cán bộ, đảng viên là lực lượng quyết định duy nhất, nhân dân chỉ có vai trò chấp hành.",
      "D. Phát triển kinh tế là mục tiêu duy nhất, các quyền và lợi ích của Nhân dân sẽ giải quyết sau."
    ],
    "answer": 0
  },
  {
    "question": "Câu 9. Minh chứng khách quan, tích cực khẳng định uy tín và đóng góp của Việt Nam trên trường quốc tế về nhân quyền là sự kiện nào?",
    "options": [
      "A. Việt Nam 03 lần trúng cử thành viên Hội đồng Nhân quyền Liên hợp quốc (có 02 nhiệm kỳ liên tiếp).",
      "B. Việt Nam áp dụng hoàn toàn mô hình chính trị đa đảng theo yêu cầu của các tổ chức phương Tây.",
      "C. Việt Nam bãi bỏ toàn bộ hệ thống luật pháp quốc gia để dùng điều ước quốc tế trực tiếp.",
      "D. Việt Nam cho phép thành lập tự do các tổ chức công đoàn độc lập nằm ngoài hệ thống chính trị."
    ],
    "answer": 0
  },
  {
    "question": "Câu 10. Qua nghiên cứu chuyên đề năm 2026, sự khác biệt cơ bản trong cách tiếp cận nhân quyền giữa các nước phương Tây và các nước đang phát triển (như Việt Nam) là gì?",
    "options": [
      "A. Phương Tây tuyệt đối hóa quyền dân sự, chính trị cá nhân; nước đang phát triển đề cao cả quyền kinh tế, xã hội, cộng đồng.",
      "B. Phương Tây coi trọng quyền phát triển cộng đồng; nước đang phát triển đề cao tự do cá nhân vô hạn.",
      "C. Phương Tây phủ nhận các chuẩn mực quốc tế; nước đang phát triển áp dụng tuyệt đối chuẩn mực quốc tế.",
      "D. Phương Tây không sử dụng nhân quyền làm công cụ ngoại giao; nước đang phát triển coi đó là vũ khí."
    ],
    "answer": 0
  },
  {
    "question": "Câu 11. Qua nghiên cứu chuyên đề năm 2026, trong tổng thể chiến lược “diễn biến hòa bình”, các thế lực thù địch coi vấn đề tự do, dân chủ, nhân quyền là gì?",
    "options": [
      "A. Phương tiện để hỗ trợ Việt Nam phát triển kinh tế và nâng cao trình độ quản lý xã hội.",
      "B. Công cụ hữu hiệu để kích động, tập hợp lực lượng, hình thành tổ chức đối lập, gây bạo loạn, tạo cớ can thiệp.",
      "C. Mối quan tâm thuần túy về mặt học thuật và lý luận triết học không có mục đích chính trị.",
      "D. Biện pháp hòa bình nhằm giúp Việt Nam giữ vững ổn định chính trị và an ninh quốc phòng."
    ],
    "answer": 1
  },
  {
    "question": "Câu 12. Qua nghiên cứu chuyên đề năm 2026, mục đích nguy hiểm nhất của các thế lực thù địch khi âm mưu “cách mạng màu”, “cách mạng đường phố” ở Việt Nam là gì?",
    "options": [
      "A. Tuyển chọn “ngọn cờ”, dựng lên chính quyền thân phương Tây hoặc ép Việt Nam chuyển hướng tư bản.",
      "B. Giúp nâng cao chỉ số phát triển con người và xóa đói giảm nghèo cho người dân vùng xa.",
      "C. Đẩy mạnh các hoạt động giao lưu văn hóa và hợp tác giáo dục giữa các quốc gia.",
      "D. Thúc đẩy quá trình hiện đại hóa Quân đội và tăng cường tiềm lực quốc phòng Việt Nam."
    ],
    "answer": 0
  },
  {
    "question": "Câu 13. Qua nghiên cứu chuyên đề năm 2026, đối với Quân đội nhân dân Việt Nam, âm mưu thâm độc nhất của các thế lực thù địch nhằm làm suy giảm sức mạnh chiến đấu là gì?",
    "options": [
      "A. Từng bước làm suy giảm uy tín, làm mất phương hướng chính trị, tiến tới “phi chính trị hóa” Quân đội.",
      "B. Tăng cường viện trợ trang thiết bị quân sự hiện đại để Quân đội phụ thuộc vào bên ngoài.",
      "C. Khuyên Quân đội tập trung vào nhiệm vụ sản xuất kinh tế mà bỏ qua huấn luyện quân sự.",
      "D. Tách rời lực lượng Quân đội khỏi sự quản lý hành chính của các cơ quan chính quyền địa phương."
    ],
    "answer": 0
  },
  {
    "question": "Câu 14. Qua nghiên cứu chuyên đề năm 2026, một số chính phủ và tổ chức quốc tế thiếu thiện chí thường dùng thủ đoạn nào để can thiệp, gây sức ép với Việt Nam?",
    "options": [
      "A. Đưa báo cáo sai lệch, đòi thả “tù nhân lương tâm” (đối tượng vi phạm pháp luật), gắn nhân quyền với viện trợ.",
      "B. Đầu tư xây dựng các trung tâm y tế, trường học miễn phí tại các vùng sâu vùng xa.",
      "C. Hỗ trợ Việt Nam khắc phục hậu quả chiến tranh và rà phá bom mìn tồn đọng.",
      "D. Ký kết các hiệp định thương mại tự do không kèm theo bất kỳ điều kiện ràng buộc nào."
    ],
    "answer": 0
  },
  {
    "question": "Câu 15. Qua nghiên cứu chuyên đề năm 2026, bản chất thực sự đằng sau các dự án, chương trình của một số tổ chức phi chính phủ nước ngoài (INGO) tại địa bàn chiến lược là gì?",
    "options": [
      "A. Núp bóng từ thiện để truyền bá giá trị Mỹ/phương Tây, cổ xúy dân chủ cực đoan, chuẩn bị cho \"bất tuân dân sự\".",
      "B. Giúp đỡ nhân dân phát triển kinh tế trang trại và nâng cao năng suất cây trồng thuần túy.",
      "C. Xây dựng hệ thống giao thông nông thôn và chuyển giao công nghệ xử lý nước sạch.",
      "D. Hỗ trợ kinh phí đào tạo cán bộ y tế cơ sở và cung cấp thuốc chữa bệnh miễn phí."
    ],
    "answer": 0
  },
  {
    "question": "Câu 16. Qua nghiên cứu chuyên đề năm 2026, tổ chức phản động lưu vong nào giữ vai trò dẫn dắt trong việc móc nối thu thập “bằng chứng” vu cáo Việt Nam vi phạm nhân quyền?",
    "options": [
      "A. Tổ chức “BPSOS”.",
      "B. Tổ chức Chữ thập đỏ quốc tế.",
      "C. Quỹ Nhi đồng Liên hợp quốc (UNICEF).",
      "D. Tổ chức Y tế Thế giới (WHO)."
    ],
    "answer": 0
  },
  {
    "question": "Câu 17. Qua nghiên cứu chuyên đề năm 2026, thủ đoạn dụ dỗ, lôi kéo người dân tộc thiểu số di cư tự do, vượt biên sang Campuchia, Thái Lan của tổ chức BPSOS nhằm mục đích gì?",
    "options": [
      "A. Khống chế, ép làm “nhân chứng sống” vu cáo Việt Nam, phục vụ mưu đồ chính trị và trục lợi tài chính.",
      "B. Giúp đỡ họ tìm kiếm việc làm có thu nhập cao và ổn định cuộc sống lâu dài ở nước ngoài.",
      "C. Tài trợ toàn bộ chi phí du học và đào tạo nghề chất lượng cao tại các quốc gia phát triển.",
      "D. Hỗ trợ làm thủ tục nhập quốc tịch hợp pháp để trở về quê hương đầu tư kinh doanh."
    ],
    "answer": 0
  },
  {
    "question": "Câu 18. Qua nghiên cứu chuyên đề năm 2026, mưu đồ thâm độc của các thế lực thù địch khi thâm nhập vào lĩnh vực giáo dục - đào tạo ở Việt Nam là gì?",
    "options": [
      "A. Đào tạo “thủ lĩnh dân chủ”, tạo lớp “lãnh đạo tiềm năng” để sẵn sàng làm \"cách mạng màu\" khi có thời cơ.",
      "B. Nâng cao chất lượng dạy và học môn ngoại ngữ cho học sinh, sinh viên Việt Nam.",
      "C. Tài trợ trang thiết bị máy tính hiện đại cho các trường học ở vùng sâu, vùng xa.",
      "D. Giúp đỡ các trường đại học Việt Nam xếp hạng cao trên các bảng xếp hạng quốc tế."
    ],
    "answer": 0
  },
  {
    "question": "Câu 19. Qua nghiên cứu chuyên đề năm 2026, các thế lực thù địch đã lợi dụng thời điểm tuyển quân hằng năm để phát tán thông tin sai lệch nhằm mục đích gì?",
    "options": [
      "A. Bôi nhọ “Bộ đội Cụ Hồ”, xuyên tạc kỷ luật Quân đội, kích động trốn nghĩa vụ quân sự.",
      "B. Đề xuất tăng chính sách hậu phương quân đội cho gia đình hạ sĩ quan, chiến sĩ.",
      "C. Khuyến khích thanh niên nâng cao thể lực để đáp ứng yêu cầu huấn luyện thao trường.",
      "D. Tuyên truyền truyền thống đánh giặc giữ nước vẻ vang của Quân đội nhân dân Việt Nam."
    ],
    "answer": 0
  },
  {
    "question": "Câu 20. Qua nghiên cứu chuyên đề năm 2026, nội dung, biện pháp hàng đầu đối với cấp ủy, chỉ huy các cấp để phòng chống chống phá về dân chủ, nhân quyền là gì?",
    "options": [
      "A. Thường xuyên lãnh đạo, quán triệt, phổ biến và cụ thể hóa các nghị quyết, chỉ thị của Đảng, Nhà nước.",
      "B. Mua sắm trang thiết bị công nghệ hiện đại mà không cần tập trung giáo dục tư tưởng.",
      "C. Cấm toàn bộ cán bộ, chiến sĩ sử dụng điện thoại thông minh và mạng internet.",
      "D. Chờ đợi hướng dẫn chi tiết từ cơ quan cấp trên khi có sự cố xảy ra tại đơn vị."
    ],
    "answer": 0
  },
  {
    "question": "Câu 21. Qua nghiên cứu chuyên đề năm 2026, cán bộ, chiến sĩ phải làm gì ngay khi phát hiện dấu hiệu bị các đối tượng xấu móc nối, lôi kéo, khống chế?",
    "options": [
      "A. Báo cáo ngay với cấp ủy, chỉ huy đơn vị và cơ quan bảo vệ an ninh để xử lý kịp thời.",
      "B. Tự mình giải quyết bí mật mà không cần thông báo cho cán bộ chỉ huy biết.",
      "C. Chấp nhận các yêu cầu của đối tượng để tránh bị đe dọa đến cá nhân và gia đình.",
      "D. Im lặng và nghỉ phép rời khỏi đơn vị một thời gian để tránh sự theo dõi."
    ],
    "answer": 0
  },
  {
    "question": "Câu 22. Yếu tố nào đóng vai trò là động lực và nguồn lực quan trọng của sự phát triển đất nước theo quan điểm của Đảng?",
    "options": [
      "A. Thực hiện tốt vấn đề tự do, dân chủ, nhân quyền và phát huy quyền làm chủ của nhân dân.",
      "B. Phụ thuộc hoàn toàn vào nguồn vốn vay ưu đãi và công nghệ từ các quốc gia phát triển.",
      "C. Tuyệt đối hóa các biện pháp quản lý hành chính tập trung và hạn chế giao thương.",
      "D. Khai thác tối đa tài nguyên thiên nhiên mà không cần tính đến phát triển bền vững."
    ],
    "answer": 0
  },
  {
    "question": "Câu 23. Qua nghiên cứu chuyên đề năm 2026, việc kết hợp hài hòa chuẩn mực quốc tế về nhân quyền ở Việt Nam phải gắn liền với các điều kiện đặc thù nào?",
    "options": [
      "A. Lịch sử, chính trị, kinh tế - xã hội, giá trị văn hóa, tôn giáo, truyền thống của dân tộc.",
      "B. Yêu cầu đơn phương từ các tổ chức phi chính phủ và các quốc gia tài trợ vốn.",
      "C. Tiêu chuẩn pháp lý riêng của hệ thống pháp luật Mỹ và các nước Tây Âu.",
      "D. Các xu hướng phát triển tự phát của các hội nhóm mạng xã hội không kiểm duyệt."
    ],
    "answer": 0
  },
  {
    "question": "Câu 24. Qua nghiên cứu chuyên đề năm 2026, vì sao các nước phương Tây thường lồng ghép vấn đề nhân quyền vào các quan hệ hợp tác đối ngoại với các nước đang phát triển?",
    "options": [
      "A. Dùng làm điều kiện ràng buộc, gây sức ép, can thiệp vào công việc nội bộ nhằm đạt lợi ích chiến lược.",
      "B. Nhằm mục đích vô tư giúp đỡ các nước đang phát triển hoàn thiện hệ thống pháp luật phù hợp với điều kiện thực tiễn.",
      "C. Mong muốn chia sẻ kinh nghiệm quản trị quốc gia một cách bình đẳng, hữu nghị.",
      "D. Thúc đẩy giao lưu văn hóa và tôn trọng sự đa dạng thể chế giữa các dân tộc."
    ],
    "answer": 0
  },
  {
    "question": "Câu 25. Qua nghiên cứu chuyên đề năm 2026, luận điệu nào thường được các đối tượng phản động sử dụng để bôi nhọ các cơ quan tố tụng Việt Nam khi bắt giữ kẻ vi phạm pháp luật?",
    "options": [
      "A. Vu cáo chính quyền “đàn áp nhà hoạt động nhân quyền”, “vi phạm tự do ngôn luận”.",
      "B. Khen ngợi sự minh bạch và tính nghiêm minh của hệ thống pháp luật Việt Nam trong giai đoạn hiện nay.",
      "C. Khẳng định các đối tượng bị bắt đã vi phạm nghiêm trọng Bộ luật Hình sự.",
      "D. Kêu gọi người dân chấp hành các bản án đã tuyên của Tòa án nhân dân."
    ],
    "answer": 0
  },
  {
    "question": "Câu 1. Qua nghiên cứu chuyên đề năm 2026, đặc điểm nào khẳng định AI vẫn mang tính công cụ và phụ thuộc vào con người?",
    "options": [
      "A. AI mô phỏng được cảm xúc con người",
      "B. AI xử lý thông tin nhanh hơn con người",
      "C. AI không có ý thức hay lập trường chính trị riêng",
      "D. AI có khả năng tự học tập từ dữ liệu"
    ],
    "answer": 2
  },
  {
    "question": "Câu 2. Qua nghiên cứu chuyên đề năm 2026, Chiến lược quốc gia về nghiên cứu, phát triển và ứng dụng AI đến năm 2030 của Việt Nam được ban hành vào năm nào?",
    "options": [
      "A. Năm 2010",
      "B. Năm 2025",
      "C. Năm 2016",
      "D. Năm 2021"
    ],
    "answer": 3
  },
  {
    "question": "Câu 3. Qua nghiên cứu chuyên đề năm 2026, trong giáo dục, AI giúp giáo viên giảm tải công việc thông qua tính năng nào?",
    "options": [
      "A. Thay thế hoàn toàn vai trò của người dạy",
      "B. Tự động hóa việc chấm điểm và phân tích kết quả",
      "C. Quản lý hành vi kỷ luật của học sinh tại nhà",
      "D. Tự động soạn thảo toàn bộ giáo trình cho các nhà trường"
    ],
    "answer": 1
  },
  {
    "question": "Câu 4. Qua nghiên cứu chuyên đề năm 2026, trong lĩnh vực quốc phòng, AI hỗ trợ người chỉ huy như thế nào trong điều kiện tác chiến nhanh?",
    "options": [
      "A. Thay thế người chỉ huy đưa ra mệnh lệnh cuối cùng",
      "B. Tự động hóa việc tuyển chọn chiến sĩ mới",
      "C. Xây dựng các phương án hành động tối ưu và đẩy nhanh tốc độ ra quyết định",
      "D. Loại bỏ hoàn toàn nhu cầu về trinh sát thực địa"
    ],
    "answer": 2
  },
  {
    "question": "Câu 5. Qua nghiên cứu chuyên đề năm 2026, tác động tích cực nào của AI giúp công tác tư tưởng chuyển từ “xử lý khi đã xảy ra” sang “phòng ngừa từ sớm”?",
    "options": [
      "A. Khả năng lưu trữ khối lượng lớn văn kiện Đảng",
      "B. Khả năng thay thế cán bộ chính trị trong việc đối thoại trực tiếp",
      "C. Khả năng dự báo xu hướng dư luận thông qua phân tích dữ liệu thời gian thực",
      "D. Khả năng tạo ra các bài giảng video sinh động"
    ],
    "answer": 2
  },
  {
    "question": "Câu 6. Qua nghiên cứu chuyên đề năm 2026, AI hỗ trợ như thế nào trong việc bảo vệ nền tảng tư tưởng trên không gian mạng?",
    "options": [
      "A. Tự động viết lại lịch sử dân tộc theo ý muốn của máy tính",
      "B. Nhận diện nội dung xuyên tạc và các mạng lưới tài khoản ảo (bot)",
      "C. Tự động khóa tất cả các tài khoản mạng xã hội cá nhân",
      "D. Ngăn chặn người dân truy cập internet hoàn toàn"
    ],
    "answer": 1
  },
  {
    "question": "Câu 7. Qua nghiên cứu chuyên đề năm 2026, công nghệ nào bị các thế lực thù địch lợi dụng để giả mạo hình ảnh, giọng nói của lãnh đạo nhằm bôi nhọ?",
    "options": [
      "A. Big Data",
      "B. Cloud Computing",
      "C. Deepfake",
      "D. Blockchain"
    ],
    "answer": 2
  },
  {
    "question": "Câu 7. Qua nghiên cứu chuyên đề năm 2026, khái niệm “Buồng dội âm” (echo chamber) trong môi trường mạng có nghĩa là gì?",
    "options": [
      "A. Nơi lưu trữ các bản ghi âm lịch sử của Đảng",
      "B. Một hệ thống loa phát thanh thông minh trong quân đội",
      "C. Phòng thí nghiệm về sóng âm thanh của AI",
      "D. Người dùng chỉ tiếp cận nội dung trùng khớp với định kiến ban đầu do thuật toán gợi ý"
    ],
    "answer": 3
  },
  {
    "question": "Câu 8. Qua nghiên cứu chuyên đề năm 2026, tại sao việc cá nhân hóa nội dung của AI lại tiềm ẩn nguy cơ làm phai nhạt lòng tin chính trị?",
    "options": [
      "A. Vì AI không thể dịch được các văn bản chính trị sang tiếng Việt để cung cấp cho người sử dụng",
      "B. Vì AI liên tục đề xuất nội dung tiêu cực nếu người dùng lỡ xem các tin tức đó",
      "C. Vì AI làm giảm tốc độ truy cập vào các trang báo Đảng",
      "D. Vì AI yêu cầu người dùng phải trả phí để xem tin tức chính thống"
    ],
    "answer": 1
  },
  {
    "question": "Câu 9. Qua nghiên cứu chuyên đề năm 2026, một trong những thách thức đối với truyền thông chính thống là gì?",
    "options": [
      "A. Thiếu hụt nguồn tin từ các cơ quan Đảng và Nhà nước",
      "B. Thay đổi thói quen tiếp nhận thông tin của công chúng (thích ngắn, nhanh, video)",
      "C. AI có khả năng viết bài hay hơn các nhà báo cách mạng",
      "D. Sự biến mất hoàn toàn của các loại báo in truyền thống"
    ],
    "answer": 1
  },
  {
    "question": "Câu 10. Qua nghiên cứu chuyên đề năm 2026, giải pháp “Bình dân học vụ số” trong LLVT Quân khu nhằm mục đích gì?",
    "options": [
      "A. Cấp chứng chỉ kỹ sư tin học cho toàn bộ quân nhân",
      "B. Xóa mù chữ cho các chiến sĩ vùng sâu vùng xa",
      "C. Dạy tiếng nước ngoài thông qua các ứng dụng AI, nâng cao chất lượng thực hiện nhiệm vụ",
      "D. Nâng cao nhận thức, kiến thức và kỹ năng số cho cán bộ, chiến sĩ"
    ],
    "answer": 3
  },
  {
    "question": "Câu 11. Qua nghiên cứu chuyên đề năm 2026, cách nào sau đây giúp quân nhân nhận diện video deepfake?",
    "options": [
      "A. Xem video đó có độ dài trên 10 phút hay không",
      "B. Kiểm tra xem video đó có màu sắc rực rỡ hay không",
      "C. Quan sát ánh mắt, chuyển động môi không tự nhiên và âm thanh không đồng bộ",
      "D. Chỉ xem video trên điện thoại thông minh thay vì máy tính"
    ],
    "answer": 2
  },
  {
    "question": "Câu 12. Qua nghiên cứu chuyên đề năm 2026, tại sao cần xây dựng đội ngũ cán bộ chính trị vững về kỹ năng số?",
    "options": [
      "A. Để họ có thể dành nhiều thời gian hơn cho việc giải trí trực tuyến",
      "B. Để họ trở thành lực lượng nòng cốt dẫn dắt dư luận và phản bác thông tin xấu độc",
      "C. Để giảm bớt số lượng cán bộ tại các cơ quan chính trị",
      "D. Để họ thay thế nhân viên kỹ thuật sửa chữa máy tính trong đơn vị"
    ],
    "answer": 1
  },
  {
    "question": "Câu 13. Qua nghiên cứu chuyên đề năm 2026, ứng dụng “AI Chatbot” trên mạng truyền số liệu quân sự được coi là gì?",
    "options": [
      "A. Thiết bị giải trí cho chiến sĩ",
      "B. Trợ lý chính trị ảo",
      "C. Người chỉ huy robot",
      "D. Hệ thống tự động canh gác"
    ],
    "answer": 1
  },
  {
    "question": "Câu 14. Qua nghiên cứu chuyên đề năm 2026, trong bối cảnh AI, yếu tố nào vẫn giữ vai trò quyết định trong cuộc đấu tranh tư tưởng?",
    "options": [
      "A. Sự hiện đại của các phần mềm diệt virus",
      "B. Tốc độ đường truyền internet",
      "C. Số lượng máy tính trang bị cho đơn vị",
      "D. Nhân tố con người (bản lĩnh và năng lực cán bộ)"
    ],
    "answer": 3
  },
  {
    "question": "Câu 15. Qua nghiên cứu chuyên đề năm 2026, nhiệm vụ bảo vệ nền tảng tư tưởng của Đảng trong tình hình mới được đánh giá như thế nào?",
    "options": [
      "A. Đã được hoàn thành xong nhờ có công nghệ AI",
      "B. Chỉ cần thực hiện khi có xung đột xảy ra",
      "C. Rất cấp bách và mang tính sống còn",
      "D. Là nhiệm vụ phụ sau nhiệm vụ huấn luyện"
    ],
    "answer": 2
  },
  {
    "question": "Câu 16. Qua nghiên cứu chuyên đề năm 2026, việc phối hợp với các cơ quan chức năng ngoài Quân đội nhằm mục đích gì?",
    "options": [
      "A. Để mượn trang thiết bị máy tính của dân sự",
      "B. Xây dựng “thế trận lòng dân” trên không gian mạng",
      "C. Chuyển giao hoàn toàn việc bảo vệ tư tưởng cho cơ quan công an",
      "D. Để nhờ các doanh nghiệp AI viết hộ các bài báo chính trị"
    ],
    "answer": 1
  },
  {
    "question": "Câu 17. Qua nghiên cứu chuyên đề năm 2026, đặc điểm nào sau đây thể hiện bản chất công nghệ cốt lõi của Trí tuệ nhân tạo (AI)?",
    "options": [
      "A. Sự mô phỏng các năng lực trí tuệ con người bằng phương tiện điện tử.",
      "B. Khả năng tự phát triển ý thức và tình cảm độc lập với con người.",
      "C. Hoạt động dựa trên sự sáng tạo không cần đến dữ liệu có sẵn.",
      "D. Là một dạng trí tuệ sinh học mới được tạo ra trong phòng thí nghiệm."
    ],
    "answer": 0
  },
  {
    "question": "Câu 18. Qua nghiên cứu chuyên đề năm 2026, mục tiêu cụ thể của Việt Nam trong Chiến lược quốc gia về AI đến năm 2030 là gì?",
    "options": [
      "A. Thay thế toàn bộ lao động thủ công bằng hệ thống AI tự động.",
      "B. Trở thành nước đứng đầu thế giới về chế tạo robot thông minh.",
      "C. Nằm trong nhóm 4 nước dẫn đầu ASEAN và nhóm 50 nước dẫn đầu thế giới về AI.",
      "D. Phát triển thành công AI tự nhận thức trước năm 2030."
    ],
    "answer": 2
  },
  {
    "question": "Câu 19. Qua nghiên cứu chuyên đề năm 2026, AI tác động tích cực như thế nào đến việc quản lý dư luận trong công tác tư tưởng?",
    "options": [
      "A. Thay thế hoàn toàn đội ngũ cán bộ làm công tác tuyên huấn.",
      "B. Tự động xóa bỏ mọi ý kiến trái chiều trên không gian mạng.",
      "C. Chuyển từ “xử lý khi đã xảy ra” sang “phòng ngừa từ sớm, từ xa”.",
      "D. Chỉ tập trung lan tỏa thông tin tích cực và bỏ qua các luồng thông tin xấu."
    ],
    "answer": 2
  },
  {
    "question": "Câu 20. Qua nghiên cứu chuyên đề năm 2026, giải pháp nào được coi là quan trọng hàng đầu trong việc bảo vệ nền tảng tư tưởng trước sự phát triển của AI?",
    "options": [
      "A. Cấm cán bộ, chiến sĩ sử dụng các thiết bị di động thông minh.",
      "B. Tập trung vào các biện pháp kỹ thuật để chặn các trang mạng phản động.",
      "C. Xây dựng một hệ thống AI riêng biệt thay thế hoàn toàn Internet, ứng dụng kịp thời khoa học công nghệ.",
      "D. Nâng cao nhận thức, thống nhất tư tưởng và trang bị kỹ năng số cho cán bộ, chiến sĩ."
    ],
    "answer": 3
  },
  {
    "question": "Câu 2. Qua nghiên cứu chuyên đề năm 2026, giá trị văn hóa “Bộ đội Cụ Hồ” trước hết được hình thành và phát triển từ yếu tố nào?",
    "options": [
      "A. Quá trình xây dựng, chiến đấu và trưởng thành của Quân đội gắn với yêu cầu bảo vệ Tổ quốc và nhiệm vụ quốc phòng trong từng thời kỳ.",
      "B. Quá trình xây dựng, chiến đấu và trưởng thành của Quân đội gắn với truyền thống dân tộc và sự phát triển của nghệ thuật quân sự Việt Nam.",
      "C. Quá trình xây dựng, chiến đấu, trưởng thành của Quân đội dưới sự lãnh đạo của Đảng và sự giáo dục, rèn luyện của Chủ tịch Hồ Chí Minh.",
      "D. Quá trình xây dựng, chiến đấu và trưởng thành của Quân đội gắn với yêu cầu xây dựng Quân đội cách mạng, chính quy, tinh nhuệ, hiện đại."
    ],
    "answer": 2
  },
  {
    "question": "Câu 3. Qua nghiên cứu chuyên đề năm 2026, đặc trưng giữ vai trò nền tảng của toàn bộ hệ giá trị văn hóa “Bộ đội Cụ Hồ” là gì?",
    "options": [
      "A. Đoàn kết, gắn bó với đồng chí, đồng đội, nhân dân và bạn bè quốc tế.",
      "B. Đạo đức trong sáng, lối sống lành mạnh, kỷ luật tự giác và tinh thần trách nhiệm cao.",
      "C. Tuyệt đối trung thành với Tổ quốc, Đảng, Nhà nước và Nhân dân.",
      "D. Không ngừng đổi mới, sáng tạo, chủ động khắc phục khó khăn và hoàn thành tốt mọi nhiệm vụ."
    ],
    "answer": 2
  },
  {
    "question": "Câu 4. Qua nghiên cứu chuyên đề năm 2026, ý nghĩa nổi bật của giá trị văn hóa “Bộ đội Cụ Hồ” đối với mỗi quân nhân là gì?",
    "options": [
      "A. Là cơ sở định hướng nhận thức, hành động và xây dựng ý thức trách nhiệm trong thực hiện nhiệm vụ.",
      "B. Là nguồn sức mạnh nội sinh, niềm tự hào và động lực phấn đấu.",
      "C. Là chuẩn mực định hướng rèn luyện phẩm chất, đạo đức và xây dựng bản lĩnh chính trị của mỗi quân nhân.",
      "D. Là cơ sở củng cố tinh thần đoàn kết, ý thức tổ chức kỷ luật."
    ],
    "answer": 1
  },
  {
    "question": "Câu 5. Qua nghiên cứu chuyên đề năm 2026, sự cần thiết phát huy giá trị văn hóa “Bộ đội Cụ Hồ” trước hết xuất phát từ cơ sở nào?",
    "options": [
      "A. Yêu cầu xây dựng Quân đội cách mạng, chính quy, tinh nhuệ, hiện đại trong tình hình mới.",
      "B. Quan điểm của chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh và đường lối của Đảng về văn hóa.",
      "C. Yêu cầu xây dựng môi trường văn hóa lành mạnh, nâng cao đời sống tinh thần và chất lượng con người trong Quân đội.",
      "D. Đòi hỏi tăng cường giáo dục chính trị, tư tưởng, đạo đức, lối sống và xây dựng phẩm chất người quân nhân."
    ],
    "answer": 1
  },
  {
    "question": "Câu 6. Qua nghiên cứu chuyên đề năm 2026, mục đích cơ bản của phát huy giá trị văn hóa “Bộ đội Cụ Hồ” là gì?",
    "options": [
      "A. Tạo chuyển biến tích cực về nhận thức, trách nhiệm, ý thức tổ chức kỷ luật và tinh thần thi đua trong mỗi quân nhân.",
      "B. Làm cho mỗi quân nhân giữ vững bản chất cách mạng, đạo đức trong sáng và hoàn thành tốt nhiệm vụ.",
      "C. Xây dựng môi trường văn hóa lành mạnh, nâng cao đời sống tinh thần và củng cố đoàn kết trong đơn vị.",
      "D. Phát huy vai trò của các hoạt động văn hóa, văn nghệ, thể dục thể thao trong xây dựng đời sống tinh thần của quân nhân."
    ],
    "answer": 1
  },
  {
    "question": "Câu 7. Qua nghiên cứu chuyên đề năm 2026, nội dung phát huy giá trị văn hóa “Bộ đội Cụ Hồ” trong chuyển đổi số nhấn mạnh yêu cầu nào?",
    "options": [
      "A. Chủ động ứng dụng công nghệ mới, ưu tiên nâng cao năng lực số và hiệu quả thực hiện nhiệm vụ của mỗi quân nhân.",
      "B. Đổi mới sáng tạo nhưng không xa rời nguyên tắc, bản lĩnh và chuẩn mực văn hóa quân sự.",
      "C. Tập trung phát triển kỹ năng số, khả năng khai thác dữ liệu và sử dụng hiệu quả các nền tảng công nghệ trong thực hiện nhiệm vụ.",
      "D. Đẩy mạnh ứng dụng trí tuệ nhân tạo, công nghệ số và các phương thức mới nhằm nâng cao chất lượng, hiệu quả công tác."
    ],
    "answer": 1
  },
  {
    "question": "Câu 8. Qua nghiên cứu chuyên đề năm 2026, việc phát huy giá trị văn hóa “Bộ đội Cụ Hồ” được gắn chặt với nhiệm vụ trọng tâm nào của cơ quan, đơn vị?",
    "options": [
      "A. Xây dựng cơ quan, đơn vị chính quy, thống nhất, có cảnh quan môi trường xanh, sạch, đẹp và đời sống văn hóa lành mạnh.",
      "B. Thực hiện nhiệm vụ chính trị trung tâm và xây dựng đơn vị vững mạnh toàn diện “mẫu mực, tiêu biểu”.",
      "C. Đẩy mạnh tăng gia sản xuất, thực hành tiết kiệm, nâng cao đời sống vật chất và tinh thần cho cán bộ, chiến sĩ.",
      "D. Xây dựng doanh trại chính quy, bảo đảm cơ sở vật chất, cảnh quan môi trường và điều kiện sinh hoạt cho bộ đội."
    ],
    "answer": 1
  },
  {
    "question": "Câu 9. Qua nghiên cứu chuyên đề năm 2026, mục tiêu cuối cùng về phát huy giá trị văn hóa “Bộ đội Cụ Hồ” hướng tới điều gì?",
    "options": [
      "A. Củng cố nền nếp chính quy, xây dựng môi trường văn hóa lành mạnh và nâng cao chất lượng đời sống tinh thần trong Quân đội.",
      "B. Củng cố mối quan hệ gắn bó máu thịt Quân đội với Nhân dân, xây dựng “thế trận lòng dân” vững chắc và lan tỏa hình ảnh cao đẹp “Bộ đội Cụ Hồ”.",
      "C. Tăng cường quan hệ đối ngoại quốc phòng, mở rộng hợp tác, giao lưu và nâng cao vị thế, uy tín của Quân đội.",
      "D. Đẩy mạnh nghiên cứu, ứng dụng khoa học công nghệ, nâng cao năng lực và khả năng đáp ứng yêu cầu xây dựng Quân đội hiện đại."
    ],
    "answer": 1
  },
  {
    "question": "Câu 10. Qua nghiên cứu chuyên đề năm 2026, giá trị văn hóa “Bộ đội Cụ Hồ” được xem là “nguồn sức mạnh nội sinh” của Quân đội trước hết vì lý do nào?",
    "options": [
      "A. Đây là hệ thống các giá trị truyền thống được hình thành, kế thừa và phát huy qua quá trình xây dựng, chiến đấu và trưởng thành của Quân đội.",
      "B. Đây là nền tảng tạo nên sự thống nhất giữa nhận thức, niềm tin, ý chí và hành động của quân nhân trong thực hiện nhiệm vụ.",
      "C. Đây là hệ thống các chuẩn mực về tổ chức, kỷ luật, điều lệnh và điều lệ, góp phần duy trì sức mạnh của Quân đội.",
      "D. Đây là hệ thống các phong trào thi đua, hoạt động giáo dục, rèn luyện, góp phần tạo động lực hoàn thành nhiệm vụ trong Quân đội."
    ],
    "answer": 1
  },
  {
    "question": "Câu 11. Qua nghiên cứu chuyên đề năm 2026, phát huy giá trị văn hóa “Bộ đội Cụ Hồ” trong thời kỳ mới phải được đặt trong mối quan hệ chủ yếu nào?",
    "options": [
      "A. Giữa xây dựng môi trường văn hóa với nâng cao đời sống vật chất, tinh thần và bảo đảm điều kiện sinh hoạt cho bộ đội.",
      "B. Giữa xây dựng con người với xây dựng Quân đội vững mạnh về chính trị.",
      "C. Giữa phát triển khoa học, công nghệ với nâng cao trình độ, năng lực.",
      "D. Giữa xây dựng Quân đội với củng cố tiềm lực quốc phòng, tăng cường hội nhập và nâng cao vị thế quốc phòng của đất nước."
    ],
    "answer": 1
  },
  {
    "question": "Câu 12: Qua nghiên cứu chuyên đề năm 2026, nếu chỉ chú trọng xây dựng trình độ chuyên môn quân sự mà xem nhẹ xây dựng giá trị văn hóa “Bộ đội Cụ Hồ” thì hệ quả lớn nhất là gì?",
    "options": [
      "A. Làm hạn chế khả năng vận dụng kiến thức, kỹ năng chuyên môn vào thực tiễn thực hiện nhiệm vụ của quân nhân.",
      "B. Làm suy giảm nền tảng chính trị, đạo đức và sức mạnh tinh thần của Quân đội.",
      "C. Làm giảm khả năng thích ứng của đội ngũ quân nhân trước sự phát triển của khoa học, công nghệ.",
      "D. Làm ảnh hưởng đến chất lượng xây dựng đội ngũ quân nhân có trình độ chuyên môn, nghiệp vụ đáp ứng yêu cầu nhiệm vụ."
    ],
    "answer": 1
  },
  {
    "question": "Câu 13. Qua nghiên cứu chuyên đề năm 2026, sức mạnh của giá trị văn hóa “Bộ đội Cụ Hồ” được khẳng định đầy đủ nhất thông qua gì?",
    "options": [
      "A. Kết quả xây dựng chính quy, chấp hành kỷ luật và duy trì nền nếp, chế độ trong cơ quan, đơn vị.",
      "B. Hiệu quả chuyển hóa thành động lực thực hiện thắng lợi mọi nhiệm vụ.",
      "C. Kết quả tổ chức thực hiện các chủ trương, nghị quyết, chỉ thị và hướng dẫn về xây dựng, phát huy giá trị văn hóa trong Quân đội.",
      "D. Kết quả xây dựng tổ chức, biên chế, lực lượng và nâng cao chất lượng đội ngũ quân nhân trong cơ quan, đơn vị."
    ],
    "answer": 1
  },
  {
    "question": "Câu 14. Qua nghiên cứu chuyên đề năm 2026, yêu cầu đặt ra đối với phát huy giá trị văn hóa “Bộ đội Cụ Hồ” trong bối cảnh chuyển đổi số là gì?",
    "options": [
      "A. Đẩy mạnh ứng dụng công nghệ số gắn với đổi mới nội dung, phương pháp giáo dục chính trị.",
      "B. Phát triển năng lực số trên nền tảng giữ vững bản lĩnh chính trị và chuẩn mực văn hóa.",
      "C. Tập trung nâng cao kỹ năng số, khả năng khai thác, sử dụng các nền tảng công nghệ.",
      "D. Đổi mới phương thức giáo dục, rèn luyện quân nhân phù hợp với môi trường số, đồng thời nâng cao khả năng thích ứng trước những tác động của công nghệ."
    ],
    "answer": 1
  },
  {
    "question": "Câu 15. Qua nghiên cứu chuyên đề năm 2026, yêu cầu xuyên suốt trong phát huy giá trị văn hóa “Bộ đội Cụ Hồ” là gì?",
    "options": [
      "A. Không ngừng đổi mới nhưng phải giữ vững bản chất cách mạng.",
      "B. Kế thừa, giữ gìn truyền thống nhưng tập trung chủ yếu vào việc bảo tồn những giá trị đã được hình thành.",
      "C. Đẩy mạnh hiện đại hóa, đổi mới phương thức hoạt động và nâng cao năng lực thích ứng trước yêu cầu nhiệm vụ mới.",
      "D. Chủ động hội nhập, tiếp thu các giá trị tiến bộ của nhân loại và vận dụng phù hợp vào xây dựng Quân đội."
    ],
    "answer": 0
  },
  {
    "question": "Câu 16. Qua nghiên cứu chuyên đề năm 2026, phát huy giá trị văn hóa “Bộ đội Cụ Hồ” phải hướng tới xây dựng hình ảnh người quân nhân như thế nào?",
    "options": [
      "A. Có trình độ chuyên môn, nghiệp vụ vững vàng, năng lực thực tiễn tốt và khả năng đáp ứng yêu cầu nhiệm vụ trong tình hình mới.",
      "B. Có bản lĩnh chính trị, đạo đức trong sáng, trí tuệ, kỷ luật và trách nhiệm cao trước Đảng, Tổ quốc và Nhân dân.",
      "C. Có sức khỏe tốt, tác phong chính quy, ý thức tổ chức kỷ luật và khả năng thích ứng với điều kiện huấn luyện, công tác.",
      "D. Có trình độ ngoại ngữ, công nghệ thông tin, kỹ năng giao tiếp và khả năng hội nhập, hợp tác trong môi trường quốc tế."
    ],
    "answer": 1
  },
  {
    "question": "Câu 17. Giá trị văn hóa “Bộ đội Cụ Hồ” là sự kết tinh những phẩm chất cao đẹp của người quân nhân cách mạng dưới sự lãnh đạo của Đảng và Chủ tịch Hồ Chí Minh, được biểu hiện tập trung ở những nội dung cơ bản nào sau đây?",
    "options": [
      "A. Tuyệt đối trung thành với Tổ quốc, với Đảng, Nhà nước và Nhân dân; dũng cảm, kiên cường, bất khuất; đạo đức trong sáng, lối sống giản dị.",
      "B. Dân chủ, kỷ luật, đoàn kết thống nhất, không ngại khó khăn, gian khổ, không ngừng đổi mới sáng tạo, hoàn thành tốt và xuất sắc nhiệm vụ.",
      "C. Có tình thương yêu đồng chí, đồng đội; gắn bó máu thịt với Nhân dân; có tinh thần quốc tế trong sáng.",
      "D. Tất cả đáp án đã nêu"
    ],
    "answer": 3
  },
  {
    "question": "Câu 18. Qua nghiên cứu chuyên đề năm 2026, đối với tổ chức đoàn, nội dung phát huy giá trị văn hóa “Bộ đội Cụ Hồ” thời kỳ mới cần gắn với phong trào nào?",
    "options": [
      "A. Thanh niên lập nghiệp.",
      "B. 3 Tiên phong quyết thắng.",
      "C. Lao động giỏi.",
      "D. Vì biển đảo quê hương."
    ],
    "answer": 1
  },
  {
    "question": "Câu 19. Qua nghiên cứu chuyên đề năm 2026, hằng năm mỗi cán bộ, đảng viên phải thực hiện nghiêm túc việc gì để phát huy giá trị văn hóa “Bộ đội Cụ Hồ” thời kỳ mới?",
    "options": [
      "A. Xây dựng kế hoạch công tác, xác định rõ nội dung, chỉ tiêu và biện pháp thực hiện nhiệm vụ được giao.",
      "B. Xây dựng cam kết tu dưỡng, rèn luyện, phấn đấu phát huy giá trị văn hóa “Bộ đội Cụ Hồ” thời kỳ mới.",
      "C. Đăng ký danh hiệu thi đua, xác định chỉ tiêu phấn đấu và nội dung rèn luyện phù hợp với chức trách, nhiệm vụ.",
      "D. Đăng ký sáng kiến, cải tiến, xác định nội dung đổi mới nhằm nâng cao chất lượng, hiệu quả thực hiện nhiệm vụ."
    ],
    "answer": 1
  },
  {
    "question": "Câu 20. Qua nghiên cứu chuyên đề năm 2026, để phát huy giá trị văn hóa “Bộ đội Cụ Hồ” thời kỳ mới, cán bộ, đảng viên cần duy trì phẩm chất nào trong quá trình rèn luyện?",
    "options": [
      "A. Quyết đoán, mạnh mẽ, chủ động khắc phục khó khăn và kiên quyết trong thực hiện nhiệm vụ được giao.",
      "B. Kiên trì, bền bỉ, nhẫn nại và thường xuyên “tự soi, tự sửa”.",
      "C. Linh hoạt, sáng tạo, chủ động thích ứng với yêu cầu nhiệm vụ và tích cực tìm tòi phương pháp mới.",
      "D. Chủ động, quyết liệt, dám nghĩ, dám làm và phát huy tinh thần trách nhiệm trong công tác."
    ],
    "answer": 1
  },
  {
    "question": "Câu 1. Theo Luật Phòng thủ dân sự, nội dung nào không thuộc biện pháp khắc phục hậu quả thảm họa, sự cố?",
    "options": [
      "A. Tổ chức tìm kiếm người mất tích, cứu chữa người bị thương.",
      "B. Tiêu hủy mầm bệnh, vệ sinh môi trường.",
      "C. Tổ chức diễn tập phòng thủ dân sự.",
      "D. Sửa chữa, khôi phục công trình hạ tầng thiết yếu."
    ],
    "answer": 2
  },
  {
    "question": "Câu 2. Theo Luật Phòng thủ dân sự, mục tiêu cao nhất của hoạt động phòng thủ dân sự là gì?",
    "options": [
      "A. Phát triển kinh tế địa phương.",
      "B. Bảo vệ tài nguyên thiên nhiên.",
      "C. Bảo vệ tính mạng, sức khỏe, tài sản của Nhân dân.",
      "D. Mở rộng hợp tác quốc tế."
    ],
    "answer": 2
  },
  {
    "question": "Câu 3. Theo Luật Phòng thủ dân sự, lực lượng phòng thủ dân sự gồm?",
    "options": [
      "A. Lực lượng chuyên trách và lực lượng dự bị động viên.",
      "B. Lực lượng nòng cốt và lực lượng rộng rãi.",
      "C. Lực lượng quân đội và công an.",
      "D. Lực lượng chuyên trách và dân quân tự vệ."
    ],
    "answer": 1
  },
  {
    "question": "Câu 4. Luật Phòng thủ dân sự áp dụng đối với đối tượng nào?",
    "options": [
      "A. Công dân Việt Nam.",
      "B. Cơ quan nhà nước, các đoàn thể.",
      "C. Tổ chức, cá nhân Việt Nam.",
      "D. Tổ chức, cá nhân Việt Nam, tổ chức quốc tế và cá nhân nước ngoài hoạt động trên lãnh thổ Việt Nam."
    ],
    "answer": 3
  },
  {
    "question": "Câu 5. Theo Luật Phòng thủ dân sự, nguyên tắc quan trọng trong hoạt động phòng thủ dân sự là gì?",
    "options": [
      "A. Ứng phó là chính.",
      "B. Chuẩn bị từ sớm, từ xa, phòng là chính.",
      "C. Khắc phục hậu quả là chính.",
      "D. Huy động toàn bộ nguồn lực ngay từ đầu."
    ],
    "answer": 1
  },
  {
    "question": "Câu 6. Theo Luật Phòng thủ dân sự, phương châm được thực hiện trong phòng thủ dân sự là gì?",
    "options": [
      "A. Ba sẵn sàng.",
      "B. Năm chủ động.",
      "C. Bốn tại chỗ.",
      "D. Ba bám, bốn cùng."
    ],
    "answer": 2
  },
  {
    "question": "Câu 7. Theo Luật Phòng thủ dân sự, cấp độ phòng thủ dân sự gồm?",
    "options": [
      "A. 02 cấp độ.",
      "B. 03 cấp độ.",
      "C. 04 cấp độ.",
      "D. 05 cấp độ."
    ],
    "answer": 1
  },
  {
    "question": "Câu 8. Theo Luật Phòng thủ dân sự, phòng thủ dân sự cấp độ 1 được áp dụng chủ yếu trong phạm vi nào?",
    "options": [
      "A. Cả nước.",
      "B. Một số tỉnh.",
      "C. Cấp tỉnh.",
      "D. Cấp xã."
    ],
    "answer": 3
  },
  {
    "question": "Câu 9. Theo Luật Phòng thủ dân sự, phòng thủ dân sự cấp độ 3 được áp dụng khi nào?",
    "options": [
      "A. Sự cố trong phạm vi xã.",
      "B. Sự cố trong phạm vi huyện.",
      "C. Sự cố vượt khả năng ứng phó của cấp tỉnh.",
      "D. Sự cố nhỏ, ít thiệt hại."
    ],
    "answer": 2
  },
  {
    "question": "Câu 10. Theo Luật Phòng thủ dân sự, hành vi nào sau đây bị nghiêm cấm trong hoạt động phòng thủ dân sự?",
    "options": [
      "A. Tham gia cứu nạn cứu hộ.",
      "B. Hỗ trợ người bị thiệt hại.",
      "C. Đưa tin sai sự thật về sự cố, thảm họa.",
      "D. Cung cấp thông tin cho cơ quan có thẩm quyền."
    ],
    "answer": 2
  },
  {
    "question": "Câu 12. Theo Luật Phòng thủ dân sự, Cơ quan thường trực của Ban Chỉ đạo Phòng thủ dân sự quốc gia là cơ quan nào?",
    "options": [
      "A. Bộ Công an.",
      "B. Bộ Quốc phòng.",
      "C. Bộ Nội vụ.",
      "D. Bộ Tài chính."
    ],
    "answer": 1
  },
  {
    "question": "Câu 13. Theo Luật Phòng thủ dân sự, Ban Chỉ đạo Phòng thủ dân sự quốc gia có chức năng gì?",
    "options": [
      "A. Quản lý doanh nghiệp nhà nước.",
      "B. Tham mưu cho Chính phủ, Thủ tướng Chính phủ về phòng thủ dân sự.",
      "C. Tham mưu ban hành luật.",
      "D. Xét xử vi phạm hành chính."
    ],
    "answer": 1
  },
  {
    "question": "Câu 14. Theo Luật Phòng thủ dân sự, Cơ quan thường trực của Ban Chỉ huy phòng thủ dân sự địa phương là ai?",
    "options": [
      "A. Công an cùng cấp.",
      "B. Văn phòng UBND.",
      "C. Cơ quan quân sự cùng cấp.",
      "D. Sở Nội vụ."
    ],
    "answer": 2
  },
  {
    "question": "Câu 15. Theo Luật Phòng thủ dân sự, lực lượng nòng cốt của phòng thủ dân sự gồm?",
    "options": [
      "A. Công chức và viên chức.",
      "B. Dân quân tự vệ và dân phòng.",
      "C. Thanh niên xung phong.",
      "D. Người lao động trong doanh nghiệp."
    ],
    "answer": 1
  },
  {
    "question": "Câu 16. Theo Luật Phòng thủ dân sự, một trong các quyền của cá nhân trong hoạt động phòng thủ dân sự là gì?",
    "options": [
      "A. Từ chối chấp hành huy động.",
      "B. Được tiếp cận thông tin về phòng thủ dân sự theo quy định của pháp luật.",
      "C. Tự quyết định cấp độ phòng thủ dân sự.",
      "D. Ban bố tình trạng khẩn cấp."
    ],
    "answer": 1
  },
  {
    "question": "Câu 17. Theo Luật Phòng thủ dân sự, một trong các nghĩa vụ của cá nhân là gì?",
    "options": [
      "A. Không cần tham gia diễn tập",
      "B. Chỉ tham gia khi tự nguyện",
      "C. Tham gia đào tạo, huấn luyện, diễn tập khi có yêu cầu của cơ quan có thẩm quyền",
      "D. Chỉ tham gia khi có thù lao"
    ],
    "answer": 2
  },
  {
    "question": "Câu 18. Theo Luật Phòng thủ dân sự, tổ chức, cá nhân nước ngoài tham gia cứu trợ tại Việt Nam phải làm gì?",
    "options": [
      "A. Đăng ký hoạt động với cơ quan có thẩm quyền của Việt Nam.",
      "B. Xin phép chính quyền cấp xã.",
      "C. Xin phép Bộ Ngoại giao nước họ.",
      "D. Được bảo lãnh bởi doanh nghiệp Việt Nam."
    ],
    "answer": 0
  },
  {
    "question": "Câu 19. Theo Luật Phòng thủ dân sự, một trong những chính sách của Nhà nước về phòng thủ dân sự là gì?",
    "options": [
      "A. Hạn chế nghiên cứu khoa học.",
      "B. Khuyến khích, tạo điều kiện ủng hộ vật chất, tài chính, tinh thần cho hoạt động phòng thủ dân sự trên nguyên tắc tự nguyện.",
      "C. Cấm huy động nguồn lực xã hội.",
      "D. Giảm đầu tư trang thiết bị phòng thủ dân sự."
    ],
    "answer": 1
  },
  {
    "question": "Câu 20. Theo Luật Phòng thủ dân sự, phương châm xuyên suốt trong hoạt động phòng thủ dân sự là gì?",
    "options": [
      "A. Ứng phó nhanh, khắc phục gọn.",
      "B. Chủ động phòng ngừa, xử lý từ cơ sở.",
      "C. Chuẩn bị từ sớm, từ xa, phòng là chính.",
      "D. Huy động tập trung, xử lý thống nhất."
    ],
    "answer": 2
  },
  {
    "question": "Câu 1. Việt Nam chính thức cử lực lượng tham gia hoạt động gìn giữ hòa bình Liên hợp quốc từ thời điểm nào?",
    "options": [
      "A. Tháng 5/2013.",
      "B. Tháng 6/2013.",
      "C. Tháng 6/2014.",
      "D. Tháng 9/2015."
    ],
    "answer": 2
  },
  {
    "question": "Câu 2. Đến nay, Việt Nam đã cử gần bao nhiêu lượt sĩ quan, quân nhân chuyên nghiệp tham gia thực hiện nhiệm vụ gìn giữ hòa bình Liên hợp quốc?",
    "options": [
      "A. Gần 500 lượt.",
      "B. Gần 700 lượt.",
      "C. Gần 900 lượt.",
      "D. Gần 1.100 lượt."
    ],
    "answer": 3
  },
  {
    "question": "Câu 3. Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, hình thức tham gia hoạt động gìn giữ hòa bình Liên hợp quốc gồm những hình thức nào?",
    "options": [
      "A. Quân sự và dân sự.",
      "B. Cá nhân và đơn vị.",
      "C. Trong nước và ngoài nước.",
      "D. Thường xuyên và đột xuất."
    ],
    "answer": 1
  },
  {
    "question": "Câu 4. Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, một trong những chức năng của lực lượng Việt Nam tham gia hoạt động gìn giữ hòa bình Liên hợp quốc là gì?",
    "options": [
      "A. Quản lý lãnh thổ nước sở tại.",
      "B. Duy trì, bảo vệ hòa bình khu vực và thế giới.",
      "C. Thực hiện nhiệm vụ tác chiến tiến công.",
      "D. Bảo vệ lợi ích kinh tế quốc gia."
    ],
    "answer": 1
  },
  {
    "question": "Câu 5. Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, lực lượng Việt Nam tham gia hoạt động gìn giữ hòa bình Liên hợp quốc gồm?",
    "options": [
      "A. Lực lượng quân sự và lực lượng công an.",
      "B. Lực lượng vũ trang và lực lượng dân sự.",
      "C. Lực lượng chuyên trách và lực lượng dự bị.",
      "D. Lực lượng thường trực và lực lượng huy động."
    ],
    "answer": 1
  },
  {
    "question": "Câu 6. Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc đã mở rộng đối tượng tham gia lực lượng gìn giữ hòa bình Liên hợp quốc bằng việc bổ sung nhóm đối tượng nào?",
    "options": [
      "A. Cán bộ, công chức, viên chức.",
      "B. Học sinh, sinh viên.",
      "C. Người lao động trong doanh nghiệp.",
      "D. Người lao động tự do."
    ],
    "answer": 0
  },
  {
    "question": "Câu 7. Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, cơ quan nào quyết định việc cử, điều chỉnh, gia hạn nhiệm kỳ công tác và rút lực lượng vũ trang tham gia gìn giữ hòa bình Liên hợp quốc?",
    "options": [
      "A. Chính phủ.",
      "B. Thủ tướng Chính phủ.",
      "C. Bộ Quốc phòng.",
      "D. Hội đồng Quốc phòng và An ninh."
    ],
    "answer": 3
  },
  {
    "question": "Câu 8. Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, trong trường hợp khẩn cấp, Bộ trưởng Bộ Quốc phòng và Bộ trưởng Bộ Công an có thẩm quyền nào?",
    "options": [
      "A. Quyết định giải thể phái bộ.",
      "B. Quyết định rút lực lượng thuộc quyền về nước.",
      "C. Quyết định thành lập phái bộ mới.",
      "D. Quyết định thay đổi nhiệm vụ của Liên hợp quốc."
    ],
    "answer": 1
  },
  {
    "question": "Câu 9. Theo Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, khi có nguy cơ mất an toàn, lực lượng Việt Nam có trách nhiệm báo cáo cấp có thẩm quyền để quyết định việc gì?",
    "options": [
      "A. Gia hạn nhiệm kỳ.",
      "B. Từ chối nhiệm vụ.",
      "C. Thay đổi phái bộ.",
      "D. Tằn quân số."
    ],
    "answer": 1
  },
  {
    "question": "Câu 10. Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, một trong những nội dung huấn luyện, đào tạo đối với lực lượng tham gia gìn giữ hòa bình Liên hợp quốc là gì?",
    "options": [
      "A. Huấn luyện tác chiến chiến lược.",
      "B. Ngoại ngữ, bình đẳng giới và các kỹ năng khác.",
      "C. Quản lý hành chính nhà nước.",
      "D. Điều tra hình sự."
    ],
    "answer": 1
  },
  {
    "question": "Câu 11. Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, một trong những yêu cầu quan trọng khi Việt Nam tham gia lực lượng gìn giữ hòa bình Liên hợp quốc là gì?",
    "options": [
      "A. Bảo đảm lợi ích kinh tế của doanh nghiệp Việt Nam ở nước ngoài.",
      "B. Phù hợp với Hiến chương Liên hợp quốc, pháp luật quốc tế, pháp luật Việt Nam và điều ước quốc tế mà Việt Nam là thành viên.",
      "C. Ưu tiên triển khai lực lượng quân sự trước lực lượng dân sự.",
      "D. Chỉ tham gia các phái bộ tại khu vực châu Á."
    ],
    "answer": 1
  },
  {
    "question": "Câu 12. Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, việc tham gia lực lượng gìn giữ hòa bình Liên hợp quốc góp phần trực tiếp thực hiện đường lối đối ngoại nào của Đảng và Nhà nước ta?",
    "options": [
      "A. Đối ngoại kinh tế là trọng tâm.",
      "B. Hội nhập kinh tế quốc tế toàn diện.",
      "C. Độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển.",
      "D. Phát triển công nghiệp quốc phòng."
    ],
    "answer": 2
  },
  {
    "question": "Câu 13. Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, việc cử lực lượng tham gia hoạt động gìn giữ hòa bình Liên hợp quốc phải bảo đảm yêu cầu nào?",
    "options": [
      "A. Không làm ảnh hưởng đến khả năng sẵn sàng chiến đấu và thực hiện nhiệm vụ của cơ quan, đơn vị.",
      "B. Chỉ lựa chọn cán bộ giữ chức vụ chỉ huy.",
      "C. Chỉ cử lực lượng quân đội tham gia.",
      "D. Ưu tiên số lượng hơn chất lượng."
    ],
    "answer": 0
  },
  {
    "question": "Câu 14. Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, đối với đơn vị tham gia hoạt động gìn giữ hòa bình Liên hợp quốc, việc tổ chức lực lượng phải đáp ứng yêu cầu gì?",
    "options": [
      "A. Theo nhu cầu của nước sở tại.",
      "B. Theo đề xuất của Liên hợp quốc và khả năng bảo đảm của Việt Nam.",
      "C. Do Bộ Ngoại giao quyết định.",
      "D. Theo yêu cầu của các tổ chức quốc tế liên quan."
    ],
    "answer": 1
  },
  {
    "question": "Câu 15. Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, một trong những nhiệm vụ của lực lượng Việt Nam tại phái bộ gìn giữ hòa bình Liên hợp quốc là gì?",
    "options": [
      "A. Tham gia thay đổi thể chế chính trị nước sở tại.",
      "B. Hỗ trợ thực hiện nhiệm vụ theo sự phân công của Liên hợp quốc.",
      "C. Tham gia hoạt động quân sự tiến công độc lập.",
      "D. Thực hiện chức năng quản lý hành chính nhà nước."
    ],
    "answer": 1
  },
  {
    "question": "Câu 16. Theo Luật tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, việc sử dụng vũ khí của lực lượng Việt Nam tại phái bộ phải tuân thủ như thế nào?",
    "options": [
      "A. Quy định của nước sở tại, trường hợp đặc biệt xin ý kiến Liên hiệp quốc",
      "B. Theo quy định của Liên hợp quốc.",
      "C. Quy định của Liên hợp quốc và thỏa thuận giữa Việt Nam với Liên hợp quốc.",
      "D. Quy định của cơ quan chỉ huy phái bộ và nước sở tại."
    ],
    "answer": 2
  },
  {
    "question": "Câu 17. Một trong những điểm mới của Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc năm 2025 là gì?",
    "options": [
      "A. Bổ sung quy định về lực lượng dân sự tham gia hoạt động gìn giữ hòa bình Liên hợp quốc.",
      "B. Bỏ hình thức tham gia theo đơn vị.",
      "C. Chỉ cho phép sĩ quan quân đội tham gia.",
      "D. Hủy bỏ cơ chế hợp tác quốc tế."
    ],
    "answer": 0
  },
  {
    "question": "Câu 18. Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, chức năng của lực lượng Việt Nam tham gia hoạt động gìn giữ hòa bình được xác định chủ yếu là gì?",
    "options": [
      "A. Bảo vệ lợi ích kinh tế.",
      "B. Duy trì, bảo vệ hòa bình.",
      "C. Thực hiện nhiệm vụ đối ngoại.",
      "D. Hỗ trợ hoạt động nhân đạo."
    ],
    "answer": 1
  },
  {
    "question": "Câu 19. Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, hoạt động hợp tác quốc tế trong lĩnh vực gìn giữ hòa bình Liên hợp quốc nhằm mục đích gì?",
    "options": [
      "A. Tăng cường năng lực tham gia hoạt động gìn giữ hòa bình Liên hợp quốc của Việt Nam.",
      "B. Mở rộng hoạt động xuất khẩu quốc phòng.",
      "C. Hình thành liên minh quân sự.",
      "D. Tăng cường cạnh tranh quốc tế."
    ],
    "answer": 0
  },
  {
    "question": "Câu 20. Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc,  một trong những hình thức hợp tác quốc tế về gìn giữ hòa bình là gì?",
    "options": [
      "A. Đào tạo, tập huấn và trao đổi kinh nghiệm.",
      "B. Chuyển giao quyền chỉ huy lực lượng.",
      "C. Liên kết quân sự thường trực.",
      "D. Thành lập lực lượng vũ trang chung."
    ],
    "answer": 0
  },
  {
    "question": "Câu 1. Theo Luật Tình trạng khẩn cấp năm 2025, cơ quan chỉ đạo, chỉ huy hoạt động trong tình trạng khẩn cấp về thảm họa là ai?",
    "options": [
      "A. Ban Chỉ huy Tình trạng khẩn cấp về quốc phòng.",
      "B. Ban Chỉ huy Bảo vệ an ninh quốc gia.",
      "C. Ban Chỉ đạo Phòng thủ dân sự quốc gia và hệ thống Ban Chỉ huy Phòng thủ dân sự các cấp.",
      "D. Chính quyền địa phương."
    ],
    "answer": 2
  },
  {
    "question": "Câu 2. Loại nào dưới đây không thuộc các loại tình trạng khẩn cấp được Luật Tình trạng khẩn cấp năm 2025 quy định?",
    "options": [
      "A. Tình trạng khẩn cấp về thảm họa.",
      "B. Tình trạng khẩn cấp về quốc phòng.",
      "C. Tình trạng khẩn cấp về an ninh quốc gia, trật tự, an toàn xã hội.",
      "D. Tình trạng khẩn cấp về kinh tế."
    ],
    "answer": 3
  },
  {
    "question": "Câu 3. Theo Luật Tình trạng khẩn cấp năm 2025, người ra quyết định ứng phó trong tình trạng khẩn cấp không phải chịu trách nhiệm khi nào?",
    "options": [
      "A. Khi quyết định gây thiệt hại nhỏ.",
      "B. Khi được cấp trên đồng ý bằng văn bản.",
      "C. Khi quyết định dựa trên thông tin có được tại thời điểm ra quyết định, đúng thẩm quyền và không có động cơ vụ lợi.",
      "D. Khi quyết định được đa số cơ quan liên quan thống nhất."
    ],
    "answer": 2
  },
  {
    "question": "Câu 4. Theo Luật Tình trạng khẩn cấp năm 2025, cơ quan có thẩm quyền quyết định ban bố tình trạng khẩn cấp là ai?",
    "options": [
      "A. Chính phủ.",
      "B. Quốc hội.",
      "C. Ủy ban Thường vụ Quốc hội.",
      "D. Chủ tịch nước."
    ],
    "answer": 2
  },
  {
    "question": "Câu 5. Theo Luật Tình trạng khẩn cấp năm 2025, chủ thể có thẩm quyền công bố tình trạng khẩn cấp căn cứ vào nghị quyết của Ủy ban Thường vụ Quốc hội là ai?",
    "options": [
      "A. Thủ tướng Chính phủ.",
      "B. Chủ tịch Quốc hội.",
      "C. Bộ trưởng Bộ Quốc phòng.",
      "D. Chủ tịch nước."
    ],
    "answer": 3
  },
  {
    "question": "Câu 6. Theo Luật Tình trạng khẩn cấp năm 2025, thông tin về tình trạng khẩn cấp phải được thực hiện như thế nào?",
    "options": [
      "A. Chỉ công bố trên Cổng thông tin Chính phủ.",
      "B. Chỉ thông báo cho các cơ quan liên quan.",
      "C. Thông báo ngay trên phương tiện thông tin đại chúng và niêm yết công khai tại địa bàn được đặt trong tình trạng khẩn cấp.",
      "D. Chỉ công bố khi có yêu cầu."
    ],
    "answer": 2
  },
  {
    "question": "Câu 7. Theo Luật Tình trạng khẩn cấp năm 2025, chủ thể có thẩm quyền quyết định áp dụng các biện pháp trong tình trạng khẩn cấp là gì?",
    "options": [
      "A. Chủ tịch nước.",
      "B. Bộ trưởng Bộ Quốc phòng.",
      "C. Thủ tướng Chính phủ.",
      "D. Chủ tịch UBND cấp tỉnh."
    ],
    "answer": 2
  },
  {
    "question": "Câu 8. Theo Luật Tình trạng khẩn cấp năm 2025, Thủ tướng Chính phủ được ủy quyền cho Chủ tịch UBND cấp tỉnh áp dụng biện pháp trong trường hợp nào?",
    "options": [
      "A. Tình trạng khẩn cấp về quốc phòng.",
      "B. Tình trạng khẩn cấp về an ninh quốc gia.",
      "C. Tình trạng khẩn cấp do thảm họa.",
      "D. Mọi loại tình trạng khẩn cấp."
    ],
    "answer": 2
  },
  {
    "question": "Câu 9. Theo Luật Tình trạng khẩn cấp năm 2025, đối tượng nào được ưu tiên trong cứu trợ, hỗ trợ khẩn cấp?",
    "options": [
      "A. Người có thu nhập thấp",
      "B. Người làm việc trong khu vực công, các đối tượng nhạy cảm dễ bị tổn thương.",
      "C. Người có nguy cơ bị ảnh hưởng đến tính mạng, sức khỏe, đặc biệt là đối tượng dễ bị tổn thương",
      "D. Người đang kinh doanh"
    ],
    "answer": 2
  },
  {
    "question": "Câu 10. Theo Luật Tình trạng khẩn cấp năm 2025, cơ quan chỉ đạo, chỉ huy hoạt động trong tình trạng khẩn cấp về thảm họa là gì?",
    "options": [
      "A. Ban Chỉ huy Tình trạng khẩn cấp về quốc phòng.",
      "B. Ban Chỉ huy Bảo vệ an ninh quốc gia.",
      "C. Ban Chỉ đạo Phòng thủ dân sự quốc gia và hệ thống Ban Chỉ huy Phòng thủ dân sự các cấp.",
      "D. Chính quyền địa phương."
    ],
    "answer": 2
  },
  {
    "question": "Câu 10. Theo Luật Tình trạng khẩn cấp năm 2025, quy định bao nhiêu loại tình trạng khẩn cấp?",
    "options": [
      "A. 02 loại.",
      "B. 03 loại.",
      "C. 04 loại.",
      "D. 05 loại."
    ],
    "answer": 1
  },
  {
    "question": "Câu 11. Theo Luật Tình trạng khẩn cấp năm 2025, trong tình trạng khẩn cấp về an ninh quốc gia, trật tự, an toàn xã hội, cơ quan chỉ huy, điều hành là gì?",
    "options": [
      "A. Ban Chỉ huy Phòng thủ dân sự.",
      "B. Ban Chỉ huy Bảo vệ an ninh quốc gia.",
      "C. Bộ Quốc phòng.",
      "D. UBND cấp tỉnh."
    ],
    "answer": 1
  },
  {
    "question": "Câu 12. Theo Luật Tình trạng khẩn cấp năm 2025, việc ra quyết định ứng phó trong tình trạng khẩn cấp gây thiệt hại nhưng dựa trên thông tin có được tại thời điểm ra quyết định, đúng thẩm quyền và không có động cơ vụ lợi thì như thế nào?",
    "options": [
      "A. Người ra quyết định vẫn phải chịu trách nhiệm vật chất.",
      "B. Người ra quyết định không phải chịu trách nhiệm.",
      "C. Phải bồi thường toàn bộ thiệt hại.",
      "D. Bị xem xét trách nhiệm hành chính."
    ],
    "answer": 1
  },
  {
    "question": "Câu 13. Theo Luật Tình trạng khẩn cấp năm 2025, trường hợp cần thiết, Thủ tướng Chính phủ được ủy quyền cho Chủ tịch UBND cấp tỉnh quyết định áp dụng biện pháp trong loại tình trạng khẩn cấp nào?",
    "options": [
      "A. Tình trạng khẩn cấp về quốc phòng.",
      "B. Tình trạng khẩn cấp về an ninh quốc gia.",
      "C. Tình trạng khẩn cấp do thảm họa.",
      "D. Tất cả các loại tình trạng khẩn cấp."
    ],
    "answer": 2
  },
  {
    "question": "Câu 14. Theo Luật Tình trạng khẩn cấp năm 2025, cơ quan nào là đầu mối chịu trách nhiệm trước Chính phủ thực hiện quản lý nhà nước về tình trạng khẩn cấp?",
    "options": [
      "A. Bộ Công an.",
      "A. Bộ Nội vụ.",
      "C. Văn phòng Chính phủ.",
      "D. Bộ Quốc phòng."
    ],
    "answer": 3
  },
  {
    "question": "Câu 15. Theo Hiến pháp năm 2013, quyền con người, quyền công dân chỉ có thể bị hạn chế bằng?",
    "options": [
      "A. Nghị quyết của Chính phủ.",
      "B. Quy định của luật.",
      "C. Quyết định của địa phương.",
      "D. Chỉ thị của bộ, ngành."
    ],
    "answer": 1
  },
  {
    "question": "Câu 16. Quan điểm nào sau đây được xác định trong quá trình xây dựng Luật Tình trạng khẩn cấp?",
    "options": [
      "A. Thay thế toàn bộ quy định hiện hành.",
      "B. Kế thừa những quy định đã được thực tiễn kiểm nghiệm.",
      "C. Bãi bỏ các luật chuyên ngành liên quan.",
      "D. Chỉ áp dụng kinh nghiệm nước ngoài."
    ],
    "answer": 1
  },
  {
    "question": "Câu 17. Trường hợp nào sau đây không thuộc các loại tình trạng khẩn cấp theo Luật Tình trạng khẩn cấp năm 2025?",
    "options": [
      "A. Tình trạng khẩn cấp về quốc phòng.",
      "B. Tình trạng khẩn cấp về tài chính.",
      "C. Tình trạng khẩn cấp về thảm họa.",
      "D. Tình trạng khẩn cấp về an ninh quốc gia, trật tự, an toàn xã hội."
    ],
    "answer": 1
  },
  {
    "question": "Câu 18. Theo Luật Tình trạng khẩn cấp năm 2025, người ra quyết định ứng phó trong tình trạng khẩn cấp không phải chịu trách nhiệm khi nào?",
    "options": [
      "A. Quyết định đúng thẩm quyền và không vụ lợi.",
      "B. Có sự đồng ý của địa phương.",
      "C. Được tập thể thống nhất.",
      "D. Có văn bản báo cáo cấp trên."
    ],
    "answer": 0
  },
  {
    "question": "Câu 19. Theo Luật Tình trạng khẩn cấp năm 2025, trong trường hợp cần thiết, Thủ tướng Chính phủ có thể ủy quyền cho Chủ tịch UBND cấp tỉnh quyết định áp dụng biện pháp như thế nào?",
    "options": [
      "A. Tình trạng khẩn cấp về quốc phòng.",
      "B. Tình trạng khẩn cấp về an ninh quốc gia.",
      "C. Tình trạng khẩn cấp do thảm họa.",
      "D. Mọi loại tình trạng khẩn cấp."
    ],
    "answer": 2
  },
  {
    "question": "Câu 20. Theo Luật Tình trạng khẩn cấp năm 2025, đối tượng nào được ưu tiên trong hoạt động cứu trợ, hỗ trợ khẩn cấp?",
    "options": [
      "A. Người có thu nhập thấp.",
      "B. Người có công với cách mạng.",
      "C. Đối tượng dễ bị tổn thương.",
      "D. Người cư trú lâu năm."
    ],
    "answer": 2
  },
  {
    "question": "Câu 1. Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, nhiệm vụ nào được xác định là nhiệm vụ chính trị đặc biệt?",
    "options": [
      "A. Bảo tồn các di tích quốc gia đặc biệt.",
      "B. Quản lý hoạt động du lịch tại Hà Nội.",
      "C. Giữ gìn lâu dài, bảo vệ tuyệt đối an toàn thi hài Chủ tịch Hồ Chí Minh và quản lý, bảo vệ Khu Di tích Lăng.",
      "D. Tổ chức các hoạt động văn hóa nghệ thuật."
    ],
    "answer": 2
  },
  {
    "question": "Câu 2. Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, Khu Di tích Lăng Chủ tịch Hồ Chí Minh có ý nghĩa đặc biệt trên những lĩnh vực nào?",
    "options": [
      "A. Kinh tế - thương mại.",
      "B. Chính trị - lịch sử - văn hóa.",
      "C. Du lịch - dịch vụ.",
      "D. Tài chính - ngân hàng."
    ],
    "answer": 1
  },
  {
    "question": "Câu 3. Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, quản lý, bảo vệ Khu Di tích Lăng phải gắn với nội dung nào?",
    "options": [
      "A. Phát triển du lịch quốc tế.",
      "B. Phát huy ý nghĩa chính trị, văn hóa của Khu Di tích Lăng.",
      "C. Hoạt động thương mại.",
      "D. Tăng thu ngân sách."
    ],
    "answer": 1
  },
  {
    "question": "Câu 4. Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, nội dung giữ gìn lâu dài, bảo vệ tuyệt đối an toàn thi hài Chủ tịch Hồ Chí Minh bao gồm?",
    "options": [
      "A. Hoạt động y tế - kỹ thuật.",
      "B. Hoạt động thương mại.",
      "C. Hoạt động đầu tư nước ngoài.",
      "D. Hoạt động sản xuất."
    ],
    "answer": 0
  },
  {
    "question": "Câu 5. Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, cơ quan nào quyết định thành lập Hội đồng khoa học cấp Nhà nước về bảo quản thi hài Chủ tịch Hồ Chí Minh?",
    "options": [
      "A. Chủ tịch nước.",
      "B. Bộ trưởng Bộ Quốc phòng.",
      "C. Thủ tướng Chính phủ.",
      "D. Quốc hội."
    ],
    "answer": 2
  },
  {
    "question": "Câu 6. Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, mục tiêu bảo vệ trong Khu Di tích Lăng bao gồm?",
    "options": [
      "A. Chỉ công trình Lăng.",
      "B. Chỉ Quảng trường Ba Đình.",
      "C. Các công trình, khu vực và hoạt động chính trị, văn hóa.",
      "D. Chỉ Đài tưởng niệm."
    ],
    "answer": 2
  },
  {
    "question": "Câu 7. Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, chức năng, nhiệm vụ của lực lượng quản lý, bảo vệ Khu Di tích Lăng do ai quy định?",
    "options": [
      "A. Chính phủ.",
      "B. Chủ tịch nước.",
      "C. Bộ trưởng Bộ Quốc phòng.",
      "D. Quốc hội."
    ],
    "answer": 2
  },
  {
    "question": "Câu 8. Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, ngân sách nhà nước bảo đảm cho nhiệm vụ quản lý, bảo vệ Khu Di tích Lăng được bố trí như thế nào?",
    "options": [
      "A. Theo pháp luật về ngân sách nhà nước.",
      "B. Theo quy chế nội bộ.",
      "C. Theo Luật Đầu tư nước ngoài.",
      "D. Theo Điều lệ doanh nghiệp."
    ],
    "answer": 0
  },
  {
    "question": "Câu 9. Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, công chức, viên chức thuộc Ban Quản lý Lăng được hưởng gì?",
    "options": [
      "A. Phụ cấp phục vụ quốc phòng, an ninh.",
      "B. Trợ cấp thất nghiệp thường xuyên.",
      "C. Phụ cấp độc hại ngành công nghiệp.",
      "D. Phụ cấp hàng hải."
    ],
    "answer": 0
  },
  {
    "question": "Câu 10. Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, một trong những hoạt động chính trị tại Khu Di tích Lăng là gì?",
    "options": [
      "A. Lễ viếng Chủ tịch Hồ Chí Minh.",
      "B. Hội chợ thương mại.",
      "C. Đấu giá tài sản.",
      "D. Triển lãm kinh doanh."
    ],
    "answer": 0
  },
  {
    "question": "Câu 11. Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh quy định hợp tác quốc tế nhằm phục vụ gì?",
    "options": [
      "A. Quản lý, bảo vệ Khu Di tích Lăng.",
      "B. Hoạt động thương mại.",
      "C. Đầu tư tài chính.",
      "D. Xuất nhập khẩu."
    ],
    "answer": 0
  },
  {
    "question": "Câu 12. Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, việc quản lý, bảo vệ Khu Di tích Lăng phải gắn với gì?",
    "options": [
      "A. Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.",
      "B. Hoạt động kinh doanh.",
      "C. Phát triển du lịch đại trà.",
      "D. Thương mại hóa di tích."
    ],
    "answer": 0
  },
  {
    "question": "Câu 13. Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, một trong những trách nhiệm của cấp ủy các cấp là gì?",
    "options": [
      "A. Đưa nội dung Pháp lệnh vào nghị quyết lãnh đạo.",
      "B. Ban hành pháp lệnh mới.",
      "C. Quy định chế độ tiền lương.",
      "D. Xây dựng luật."
    ],
    "answer": 0
  },
  {
    "question": "Câu 14. Cấp ủy các cấp phải tăng cường công tác nào đối với việc thực hiện Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh?",
    "options": [
      "A. Kiểm tra, giám sát.",
      "B. Thanh lý tài sản.",
      "C. Đấu thầu.",
      "D. Cổ phần hóa."
    ],
    "answer": 0
  },
  {
    "question": "Câu 15. Ý nghĩa quan trọng của việc triển khai Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh là gì?",
    "options": [
      "A. Tăng nguồn thu ngân sách",
      "B. Bảo vệ tuyệt đối an toàn thi hài Chủ tịch Hồ Chí Minh và phát huy giá trị chính trị, lịch sử, văn hóa của Khu Di tích Lăng",
      "C. Mở rộng hoạt động thương mại",
      "D. Phát triển du lịch đại trà Đáp án B"
    ],
    "answer": 0
  },
  {
    "question": "Câu 16. Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, Khu Di tích Lăng Chủ tịch Hồ Chí Minh có ý nghĩa nổi bật nào dưới đây?",
    "options": [
      "A. Chỉ mang giá trị kiến trúc, du lịch.",
      "B. Chỉ phục vụ nghiên cứu khoa học.",
      "C. Có giá trị đặc biệt về chính trị, lịch sử, văn hóa và quốc phòng - an ninh.",
      "D. Chỉ phục vụ các hoạt động đối ngoại."
    ],
    "answer": 2
  },
  {
    "question": "Câu 17. Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, một trong những nội dung quản lý, bảo vệ Khu Di tích Lăng là gì?",
    "options": [
      "A. Quản lý hoạt động kinh doanh dịch vụ du lịch.",
      "B. Quản lý, tổ chức các hoạt động chính trị, văn hóa trong Khu Di tích Lăng.",
      "C. Quản lý hoạt động báo chí trên địa bàn Hà Nội.",
      "D. Quản lý các khu vui chơi công cộng."
    ],
    "answer": 1
  },
  {
    "question": "Câu 18. Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, đặc điểm nổi bật của công tác bảo vệ Khu Di tích Lăng so với nhiều công trình quốc phòng khác là gì?",
    "options": [
      "A. Tập trung đón khách tham quan.",
      "B. Chỉ có lực lượng quân đội bảo vệ.",
      "C. Vừa bảo đảm an ninh tuyệt đối, vừa phục vụ đông đảo Nhân dân và khách quốc tế.",
      "D. Thực hiện nhiệm vụ sẵn sàng chiến đấu và phục vụ Nhân dân."
    ],
    "answer": 2
  },
  {
    "question": "Câu 19. Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, việc quản lý, bảo vệ Khu Di tích Lăng phải gắn với nội dung nào?",
    "options": [
      "A. Phát triển thương mại, dịch vụ.",
      "B. Phát huy giá trị chính trị, lịch sử, văn hóa của Khu Di tích Lăng.",
      "C. Tăng nguồn thu ngân sách địa phương.",
      "D. Mở rộng hoạt động kinh doanh du lịch."
    ],
    "answer": 1
  },
  {
    "question": "Câu 20. Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, nghi lễ nào được xác định là hoạt động thường xuyên trong Khu Di tích Lăng?",
    "options": [
      "A. Diễu binh quốc gia hằng tuần.",
      "B. Chào cờ, hạ cờ hằng ngày tại Quảng trường Ba Đình.",
      "C. Lễ hội văn hóa quốc tế định kỳ.",
      "D. Hội chợ triển lãm chuyên ngành."
    ],
    "answer": 1
  },
  {
    "question": "Câu 1. Luật Thanh tra (sửa đổi) năm 2025 đã kết thúc hoạt động của những cơ quan thanh tra nào ở các Bộ, cơ quan thuộc Chính phủ và địa phương?",
    "options": [
      "A. Kết thúc hoạt động của Thanh tra Bộ, Thanh tra Tổng cục, Cục thuộc Bộ, Thanh tra sở và Thanh tra huyện.",
      "B. Kết thúc hoạt động của Thanh tra Chính phủ, Thanh tra Bộ Công an, Thanh tra Bộ Quốc phòng, Thanh tra tỉnh.",
      "C. Kết thúc hoạt động của Thanh tra Ngân hàng Nhà nước, Thanh tra Cơ yếu và các cơ quan Thanh tra quân khu.",
      "D. Kết thúc hoạt động của Thanh tra Chính phủ và toàn bộ hệ thống cơ quan Thanh tra tỉnh trên cả nước."
    ],
    "answer": 0
  },
  {
    "question": "Câu 2. Sự thay đổi quan trọng nào về mặt khái niệm đã được thực hiện trong Luật Thanh tra năm 2025 (sửa đổi)?",
    "options": [
      "A. Sửa đổi khái niệm “thanh tra”, không quy định riêng các khái niệm thanh tra hành chính, thanh tra chuyên ngành.",
      "B. Giữ nguyên khái niệm “thanh tra” cũ và mở rộng thêm các loại hình thanh tra tư nhân, thanh tra độc lập.",
      "C. Bỏ hoàn toàn khái niệm “thanh tra” và thay thế bằng khái niệm “kiểm tra nhà nước” trong toàn bộ văn bản.",
      "D. Quy định rõ ràng phân loại 05 khái niệm thanh tra riêng biệt cho từng cấp quản lý hành chính nhà nước."
    ],
    "answer": 0
  },
  {
    "question": "Câu 3. Theo khoản 1 Điều 2 Luật Thanh tra năm 2025 (sửa đổi), khái niệm “Thanh tra” được định nghĩa chuẩn xác như thế nào?",
    "options": [
      "A. Là hoạt động xem xét, đánh giá, kết luận, kiến nghị xử lý đối với việc thực hiện chính sách, pháp luật, nhiệm vụ.",
      "B. Là hoạt động kiểm tra, xử phạt, thu hồi tài sản vi phạm đối với mọi cá nhân, tổ chức trên lãnh thổ Việt Nam.",
      "C. Là hoạt động điều tra, truy tố, xét xử các hành vi vi phạm pháp luật hành chính và hình sự của đối tượng.",
      "D. Là hoạt động giám sát, đôn đốc, hướng dẫn các cơ quan nhà nước thực hiện đúng chức năng, nhiệm vụ được giao."
    ],
    "answer": 0
  },
  {
    "question": "Câu 4. Theo Điều 7 Luật Thanh tra năm 2025 (sửa đổi), hệ thống các cơ quan thanh tra bao gồm những cơ quan nào?",
    "options": [
      "A. Thanh tra Chính phủ; Thanh tra tỉnh; Thanh tra Quân đội, Công an, Ngân hàng Nhà nước, Cơ yếu; Điều ước quốc tế.",
      "B. Thanh tra Chính phủ; Thanh tra các Bộ; Thanh tra các Tổng cục; Thanh tra các Sở và Thanh tra các Huyện.",
      "C. Thanh tra Chính phủ; Thanh tra các Bộ; Thanh tra tỉnh; Thanh tra Huyện và các Ban Thanh tra nhân dân.",
      "D. Thanh tra Chính phủ; Thanh tra Ủy ban Thường vụ Quốc hội; Thanh tra Tòa án nhân dân; Thanh tra Kiểm toán."
    ],
    "answer": 0
  },
  {
    "question": "Câu 5. Khi thực hiện sắp xếp tinh gọn bộ máy, Thanh tra Chính phủ sẽ tiếp nhận thêm chức năng, nhiệm vụ của những cơ quan nào?",
    "options": [
      "A. Tiếp nhận thêm chức năng, nhiệm vụ thanh tra của 12 Thanh tra Bộ không tiếp tục duy trì cơ quan thanh tra.",
      "B. Tiếp nhận thêm chức năng, nhiệm vụ thanh tra của toàn bộ hệ thống Thanh tra tỉnh, thành phố trực thuộc Trung ương.",
      "C. Tiếp nhận thêm chức năng, nhiệm vụ thanh tra của Thanh tra Bộ Công an, Thanh tra Bộ Quốc phòng và Ngân hàng.",
      "D. Tiếp nhận thêm chức năng, nhiệm vụ của Kiểm toán Nhà nước và cơ quan Điều tra hình sự thuộc Bộ Công an."
    ],
    "answer": 0
  },
  {
    "question": "Câu 6. Khi thực hiện sắp xếp tinh gọn bộ máy, Thanh tra tỉnh sẽ tiếp nhận thêm chức năng, nhiệm vụ của những cơ quan nào?",
    "options": [
      "A. Tiếp nhận thêm chức năng, nhiệm vụ thanh tra của Thanh tra cấp huyện và Thanh tra các sở trên địa bàn tỉnh.",
      "B. Tiếp nhận thêm chức năng, nhiệm vụ thanh tra của Thanh tra Chính phủ giao lại cho địa phương thực hiện.",
      "C. Tiếp nhận thêm chức năng, nhiệm vụ thanh tra của các cơ quan Tòa án nhân dân và Viện kiểm sát nhân dân cấp tỉnh.",
      "D. Tiếp nhận thêm chức năng, nhiệm vụ thanh tra của Thanh tra Bộ Quốc phòng và Thanh tra Bộ Công an trên địa bàn."
    ],
    "answer": 0
  },
  {
    "question": "Câu 7. Luật Thanh tra năm 2025 bổ sung nhiệm vụ, quyền hạn nào cho Tổng Thanh tra Chính phủ nhằm tăng cường mối quan hệ công tác khi tiến hành thanh tra?",
    "options": [
      "A. Đề nghị Bộ trưởng, Thủ trưởng cơ quan ngang Bộ cử công chức có chuyên môn phù hợp tham gia Đoàn thanh tra.",
      "B. Trực tiếp bổ nhiệm, miễn nhiệm Chánh Thanh tra các tỉnh, thành phố trực thuộc trung ương trên cả nước.",
      "C. Quyết định đình chỉ hoạt động của các Bộ, cơ quan ngang Bộ khi phát hiện có dấu hiệu vi phạm nghiêm trọng.",
      "D. Quyết định thay đổi kết luận kiểm toán của Kiểm toán Nhà nước nếu có sự trùng lặp về phạm vi thanh tra."
    ],
    "answer": 0
  },
  {
    "question": "Câu 8. Luật Thanh tra năm 2025 bổ sung nhiệm vụ, quyền hạn nào cho Chánh Thanh tra tỉnh nhằm bảo đảm năng lực cho Đoàn thanh tra?",
    "options": [
      "A. Đề nghị Giám đốc Sở, Chủ tịch UBND cấp cơ sở cử công chức có chuyên môn phù hợp tham gia Đoàn thanh tra.",
      "B. Trực tiếp điều động, bổ nhiệm, kỷ luật Chủ tịch Ủy ban nhân dân cấp xã và Giám đốc các Sở trên địa bàn.",
      "C. Quyết định bãi bỏ các Nghị quyết của Hội đồng nhân dân cấp tỉnh nếu có nội dung trái với quy định thanh tra.",
      "D. Phân công Thanh tra viên cấp tỉnh đảm nhiệm chức danh Trưởng công an cấp huyện khi tiến hành thanh tra."
    ],
    "answer": 0
  },
  {
    "question": "Câu 9. Quy định mới về chuyển thông tin cho cơ quan điều tra trong hoạt động thanh tra tại điểm d khoản 2 Điều 39 Luật Thanh tra 2025 được nêu như thế nào?",
    "options": [
      "A. Trường hợp phát hiện có dấu hiệu tội phạm nhưng chưa xác định hậu quả thì kết luận rõ và chuyển thông tin.",
      "B. Trường hợp phát hiện có dấu hiệu tội phạm phải tạm dừng toàn bộ cuộc thanh tra để chờ cơ quan điều tra trả lời.",
      "C. Chỉ được chuyển thông tin sau khi đã ban hành kết luận thanh tra chính thức và có ý kiến của Thủ trưởng hành chính.",
      "D. Bắt buộc phải xác định chính xác 100% mức độ thiệt hại kinh tế mới được phép chuyển hồ sơ sang cơ quan điều tra."
    ],
    "answer": 0
  },
  {
    "question": "Câu 10. Luật Thanh tra năm 2025 cắt giảm bao nhiêu phần trăm các thủ tục hành chính trong hoạt động thanh tra so với trước đây?",
    "options": [
      "A. Cắt giảm trên 40% các thủ tục hành chính trong tổ chức và hoạt động thanh tra so với Luật Thanh tra 2022.",
      "B. Cắt giảm khoảng 10% các thủ tục hành chính trong tổ chức và hoạt động thanh tra so với Luật Thanh tra 2022.",
      "C. Cắt giảm đúng 25% các thủ tục hành chính trong tổ chức và hoạt động thanh tra so với Luật Thanh tra 2022.",
      "D. Cắt giảm khoảng 70% các thủ tục hành chính trong tổ chức và hoạt động thanh tra so me Luật Thanh tra 2022."
    ],
    "answer": 0
  },
  {
    "question": "Câu 11. Luật Thanh tra 2025 quy định cơ chế phân cấp như thế nào đối với việc thanh tra quản lý, sử dụng vốn, tài sản nhà nước tại doanh nghiệp?",
    "options": [
      "A. Thanh tra Chính phủ và Thanh tra tỉnh chủ động thanh tra sau khi báo cáo Thủ trưởng cơ quan quản lý cùng cấp.",
      "B. Bắt buộc phải có sự đồng ý bằng văn bản của Thủ tướng Chính phủ mới được tiến hành thanh tra doanh nghiệp.",
      "C. Cấm các cơ quan thanh tra tiến hành thanh tra tại các doanh nghiệp nhà nước đã thực hiện cổ phần hóa.",
      "D. Giao toàn bộ thẩm quyền thanh tra vốn, tài sản nhà nước tại doanh nghiệp cho Bộ Tài chính độc lập thực hiện."
    ],
    "answer": 0
  },
  {
    "question": "Câu 12. Nội dung nào sau đây thuộc về thẩm quyền phân quyền cho Chính phủ quy định chi tiết theo Luật Thanh tra năm 2025?",
    "options": [
      "A. Quy định quản lý, sử dụng kinh phí trích cho cơ quan thanh tra và chế độ, trang phục đối với Thanh tra viên.",
      "B. Quy định tiêu chuẩn bổ nhiệm, miễn nhiệm các ngạch Thẩm phán Tòa án nhân dân và Kiểm sát viên các cấp.",
      "C. Quy định thẩm quyền xét xử các vụ án hình sự phát hiện qua hoạt động thanh tra của Thanh tra Chính phủ.",
      "D. Quy định cơ cấu tổ chức bộ máy và chức năng, nhiệm vụ của các cơ quan thuộc Hội đồng nhân dân cấp tỉnh."
    ],
    "answer": 0
  },
  {
    "question": "Câu 13. Nghị định số 216/2025/NĐ-CP được Chính phủ ban hành ngày 05/8/2025 quy định về nội dung cơ bản nào?",
    "options": [
      "A. Quy định chi tiết một số điều và hướng dẫn thi hành Luật Thanh tra nhằm triển khai đồng bộ Luật Thanh tra.",
      "B. Quy định về tổ chức và hoạt động của Thanh tra quốc phòng trong Quân đội nhân dân Việt Nam hiện nay.",
      "C. Quy định về tổ chức và hoạt động thanh tra Công an nhân dân trong lực lượng Công an nhân dân hiện nay.",
      "D. Quy định về xử phạt vi phạm hành chính trong lĩnh vực thanh tra, giải quyết khiếu nại, tố cáo toàn quốc."
    ],
    "answer": 0
  },
  {
    "question": "Câu 14. Nghị định số 217/2025/NĐ-CP được Chính phủ ban hành ngày 05/8/2025 quy định về vấn đề gì?",
    "options": [
      "A. Quy định chi tiết về hoạt động kiểm tra chuyên ngành áp dụng thống nhất trong cơ quan hành chính nhà nước.",
      "B. Quy định về việc trích lập, quản lý và sử dụng nguồn kinh phí từ các khoản thu hồi qua công tác thanh tra.",
      "C. Quy định chế độ, chính sách, trang phục, thẻ thanh tra đối với cán bộ, công chức làm công tác thanh tra.",
      "D. Quy định việc ứng dụng công nghệ thông tin, công nghệ số và sổ nhật ký điện tử trong Đoàn thanh tra."
    ],
    "answer": 0
  },
  {
    "question": "Câu 15. Nghị định số 284/2025/NĐ-CP do Chính phủ ban hành ngày 03/11/2025 quy định về tổ chức và hoạt động của cơ quan nào?",
    "options": [
      "A. Quy định về tổ chức và hoạt động của Thanh tra quốc phòng, thay thế cho Nghị định số 33/2014/NĐ-CP trước đây.",
      "B. Quy định về tổ chức và hoạt động của Thanh tra ngành Ngân hàng Nhà nước Việt Nam trong thời kỳ mới.",
      "C. Quy định về tổ chức và hoạt động của Thanh tra Cơ yếu thuộc Ban Cơ yếu Chính phủ theo Luật Thanh tra mới.",
      "D. Quy định về tổ chức và hoạt động của Thanh tra theo điều ước quốc tế mà Việt Nam là quốc gia thành viên."
    ],
    "answer": 0
  },
  {
    "question": "Câu 16. Nghị định số 273/2025/NĐ-CP do Chính phủ ban hành ngày 16/10/2025 quy định về nội dung nào?",
    "options": [
      "A. Quy định về tổ chức và hoạt động thanh tra Công an nhân dân triển khai thi hành Luật Thanh tra năm 2025.",
      "B. Quy định về việc phòng, chống lãng phí, tiêu cực trong các cơ quan điều tra thuộc lực lượng Công an nhân dân.",
      "C. Quy định quy trình giải quyết khiếu nại, tố cáo và tiếp công dân trong lực lượng Công an nhân dân hiện nay.",
      "D. Quy định tiêu chuẩn bổ nhiệm, miễn nhiệm cán bộ làm công tác kiểm tra, giám sát trong Công an nhân dân."
    ],
    "answer": 0
  },
  {
    "question": "Câu 17. Theo Nghị định số 284/2025/NĐ-CP, cơ quan Thanh tra quốc phòng bao gồm những cấp tổ chức nào?",
    "options": [
      "A. Cơ quan Thanh tra Bộ Quốc phòng; Thanh tra quốc phòng Quân khu; Thanh tra Bộ Tư lệnh Thủ đô Hà Nội.",
      "B. Cơ quan Thanh tra Bộ Quốc phòng; Thanh tra các Sư đoàn; Thanh tra các Trung đoàn và Thanh tra Ban CHQS cấp huyện.",
      "C. Cơ quan Thanh tra Bộ Quốc phòng; Thanh tra các Quân đoàn; Thanh tra các Binh chủng và Thanh tra Học viện.",
      "D. Cơ quan Thanh tra Bộ Quốc phòng; Thanh tra Bộ Tổng Tham mưu; Thanh tra Tổng cục Chính trị và các Tổng cục."
    ],
    "answer": 0
  },
  {
    "question": "Câu 18. Theo Điều 3 Nghị định số 284/2025/NĐ-CP, Thanh tra quốc phòng có chức năng cơ bản nào sau đây?",
    "options": [
      "A. Giúp Thủ trưởng cơ quan cùng cấp quản lý nhà nước về thanh tra, tiếp công dân, giải quyết KNTC, phòng chống TNC.",
      "B. Thực hiện nhiệm vụ điều tra các vụ án hình sự nguy hiểm phát sinh trong và ngoài lực lượng Quân đội nhân dân.",
      "C. Trực tiếp chỉ đạo công tác tác chiến, huấn luyện sẵn sàng chiến đấu đối với các đơn vị lực lượng vũ trang.",
      "D. Thẩm định, phê duyệt ngân sách quốc phòng và quyết toán thu chi tài chính hàng năm của các quân khu."
    ],
    "answer": 0
  },
  {
    "question": "Câu 19. Thanh tra Bộ Quốc phòng là cơ quan có vị trí pháp lý như thế nào theo Nghị định số 284/2025/NĐ-CP?",
    "options": [
      "A. Là cơ quan trực thuộc Bộ Quốc phòng, giúp Bộ trưởng Bộ Quốc phòng quản lý nhà nước về công tác thanh tra.",
      "B. Là đơn vị sự nghiệp công lập trực thuộc Bộ Tổng Tham mưu Quân đội nhân dân Việt Nam quản lý trực tiếp.",
      "C. Là cơ quan chuyên môn độc lập hoàn toàn trực thuộc Tổng Thanh tra Chính phủ đặt tại Bộ Quốc phòng.",
      "D. Là cơ quan tham mưu thuộc Tổng cục Chính trị chịu sự chỉ đạo trực tiếp của Ủy ban Kiểm tra Quân ủy Trung ương."
    ],
    "answer": 0
  },
  {
    "question": "Câu 20. Trong hoạt động thanh tra, Thanh tra Bộ Quốc phòng có nhiệm vụ, quyền hạn nào đối với các doanh nghiệp trong Quân đội?",
    "options": [
      "A. Thanh tra đối với các doanh nghiệp do Bộ trưởng quyết định thành lập hoặc được giao trực tiếp quản lý.",
      "B. Không có thẩm quyền thanh tra doanh nghiệp quân đội mà giao toàn bộ cho Thanh tra Bộ Tài chính thực hiện.",
      "C. Chỉ thanh tra khi có yêu cầu bằng văn bản của Cơ quan Điều tra hình sự Bộ Quốc phòng gửi đề nghị.",
      "D. Chỉ thanh tra các doanh nghiệp quân đội hoạt động thuần túy trong lĩnh vực sản xuất kinh tế thương mại."
    ],
    "answer": 0
  },
  {
    "question": "Câu 1. Phương châm của Đại hội XIV của Đảng được xác định là gì?",
    "options": [
      "A. Đoàn kết – Kỷ cương – Phát triển – Hội nhập",
      "B. Đoàn kết – Dân chủ – Kỷ cương – Đột phá – Phát triển",
      "C. Dân chủ – Kỷ luật – Đổi mới – Phát triển",
      "D. Đoàn kết – Đổi mới – Hội nhập – Bền vững"
    ],
    "answer": 1
  },
  {
    "question": "Câu 2. Đại hội XIV của Đảng xác định mục tiêu phát triển đến năm 2030 của Việt Nam là gì?",
    "options": [
      "A. Nước phát triển, thu nhập cao",
      "B. Nước công nghiệp theo hướng hiện đại",
      "C. Nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao",
      "D. Trung tâm kinh tế số của khu vực"
    ],
    "answer": 2
  },
  {
    "question": "Câu 3. Đại hội XIV của Đảng xác định chỉ tiêu tăng trưởng GDP bình quân giai đoạn 2026–2030?",
    "options": [
      "A. 7–8%/năm",
      "B. 8–9%/năm",
      "C. Từ 9%/năm trở lên",
      "D. Từ 10%/năm trở lên"
    ],
    "answer": 3
  },
  {
    "question": "Câu 4. Đại hội XIV của Đảng xác định một trong các ngành công nghiệp, công nghệ chiến lược được ưu tiên phát triển là gì?",
    "options": [
      "A. Công nghiệp khai khoáng",
      "B. Công nghiệp dệt may",
      "C. Chip bán dẫn và trí tuệ nhân tạo",
      "D. Công nghiệp chế biến nông sản"
    ],
    "answer": 2
  },
  {
    "question": "Câu 6. Đại hội XIV của Đảng, quan điểm xuyên suốt trong các định hướng phát triển 2026–2030 là gì?",
    "options": [
      "A. Tăng trưởng nhanh bằng mọi giá",
      "B. Lấy phát triển để ổn định, ổn định để thúc đẩy phát triển",
      "C. Ưu tiên kinh tế trước, xã hội sau",
      "D. Phát triển tập trung vào đô thị lớn"
    ],
    "answer": 1
  },
  {
    "question": "Câu 7. Một nhiệm vụ trọng tâm về xây dựng Đảng trong nhiệm kỳ Đại hội XIV của Đảng là gì?",
    "options": [
      "A. Mở rộng số lượng đảng viên",
      "B. Tăng quyền tự chủ cho cơ sở",
      "C. Kiểm soát quyền lực, phòng chống tham nhũng, tiêu cực",
      "D. Giảm vai trò lãnh đạo của Đảng trong kinh tế"
    ],
    "answer": 2
  },
  {
    "question": "Câu 8. Đại hội XIV của Đảng, đột phá chiến lược về thể chế phát triển nhằm mục tiêu trực tiếp nào?",
    "options": [
      "A. Tăng thu ngân sách",
      "B. Giảm chi tiêu công",
      "C. Khơi thông, giải phóng và phát huy hiệu quả các nguồn lực",
      "D. Đẩy nhanh đô thị hóa"
    ],
    "answer": 2
  },
  {
    "question": "Câu 9. Đại hội XIV của Đảng xác định việc nhấn mạnh phát triển nguồn nhân lực chất lượng cao gắn chặt nhất với mục tiêu nào?",
    "options": [
      "A. Thu hút đầu tư nước ngoài",
      "B. Nâng cao năng suất, chất lượng lao động",
      "C. Giải quyết việc làm, ổn định đời sống người dân",
      "D. Tăng dân số trong độ tuổi lao động"
    ],
    "answer": 1
  },
  {
    "question": "Câu 10. Tầm nhìn đến năm 2045 được Nghị quyết Đại hội XIV xác định là gì?",
    "options": [
      "A. Trở thành nước công nghiệp hiện đại",
      "B. Trở thành nước phát triển, thu nhập cao",
      "C. Trở thành trung tâm đổi mới sáng tạo châu Á",
      "D. Trở thành quốc gia kinh tế số hàng đầu"
    ],
    "answer": 1
  },
  {
    "question": "Câu 11. Đại hội XIV của Đảng xác định phát triển văn hóa và con người    trong chiến lược phát triển đất nước là gì?",
    "options": [
      "A. Một lĩnh vực xã hội cần đầu tư",
      "B. Nhiệm vụ lâu dài, gián tiếp, góp phần phát triển kinh tế, xã hội, ổn định đời sống Nhân dân",
      "C. Nền tảng tinh thần, sức mạnh nội sinh, động lực to lớn cho sự phát triển nhanh, bền vững của đất nước",
      "D. Công cụ hỗ trợ ổn định xã hội"
    ],
    "answer": 2
  },
  {
    "question": "Câu 12. Đại hội XIV của Đảng đặt ra chỉ tiêu GDP bình quân đầu người đến năm 2030 dự kiến đạt khoảng bao nhiêu USD?",
    "options": [
      "A. 6.500 USD",
      "B. 7.500 USD",
      "C. 8.500 USD",
      "D. 10.000 USD"
    ],
    "answer": 2
  },
  {
    "question": "Câu 16. Đại hội XIV của Đảng bầu Ban Chấp hành Trung ương Đảng gồm bao nhiêu đồng chí?",
    "options": [
      "A. 200 đồng chí",
      "B. 180 đồng chí",
      "C. 220 đồng chí",
      "D. 160 đồng chí"
    ],
    "answer": 0
  },
  {
    "question": "Câu 13. Nghị quyết Đại hội XIV xác định vị thế của đất nước ta sau 40 năm tiến hành công cuộc Đổi mới là gì?",
    "options": [
      "A. Đã hoàn thành mục tiêu trở thành một nước công nghiệp hiện đại.",
      "B. Đang trong giai đoạn quá độ lên chủ nghĩa xã hội ở trình độ cao.",
      "C. Mở ra bước ngoặt lịch sử mới, kỷ nguyên vươn mình của dân tộc.",
      "D. Trở thành quốc gia có tầm ảnh hưởng lớn nhất trong khu vực ASEAN."
    ],
    "answer": 2
  },
  {
    "question": "Câu 14. “Kỷ nguyên vươn mình của dân tộc” theo tinh thần Đại hội XIV được hiểu cốt lõi là gì?",
    "options": [
      "A. Thời kỳ tập trung tối đa nguồn lực để phát triển các ngành quân sự.",
      "B. Giai đoạn bứt phá để đạt mục tiêu quốc gia phát triển, thu nhập cao.",
      "C. Thời kỳ mở rộng hợp tác quốc tế trên tất cả các lĩnh vực đời sống.",
      "D. Giai đoạn hoàn thiện hệ thống luật pháp theo tiêu chuẩn quốc tế mới."
    ],
    "answer": 1
  },
  {
    "question": "Câu 16. Đại hội XIV của Đảng coi cuộc cách mạng về sắp xếp tổ chức bộ máy có ý nghĩa như thế nào?",
    "options": [
      "A. Tạo ra bước chuyển chiến lược để hệ thống chính trị hoạt động hiệu quả.",
      "B. Giúp giảm bớt chi phí vận hành thường xuyên của bộ máy chính quyền.",
      "C. Nhằm hiện đại hóa các quy trình quản lý văn bản trong cơ quan nhà nước.",
      "D. Là giải pháp tạm thời để ứng phó với tình hình khó khăn kinh tế hiện nay."
    ],
    "answer": 0
  },
  {
    "question": "Câu 17. Trong lĩnh vực đối ngoại, “Tự chủ chiến lược” theo Nghị quyết Đại hội XIV có nghĩa là gì?",
    "options": [
      "A. Giữ vững độc lập, chủ động lựa chọn hướng đi có lợi cho dân tộc.",
      "B. Không tham gia vào bất kỳ một tổ chức kinh tế hay chính trị nào quốc tế.",
      "C. Chỉ tập trung quan hệ với các nước láng giềng có chung đường biên giới.",
      "D. Tự sản xuất mọi hàng hóa thiết yếu mà không cần nhập khẩu từ nước ngoài."
    ],
    "answer": 0
  },
  {
    "question": "Câu 18. Điểm mới trong công tác đấu tranh phòng, chống tham nhũng, tiêu cực tại Đại hội XIV của Đảng là gì?",
    "options": [
      "A. Chỉ tập trung xử lý các sai phạm có liên quan đến lĩnh vực kinh tế.",
      "B. Tăng cường quyền hạn cho các cơ quan điều tra tại các cấp địa phương.",
      "C. Đẩy mạnh đấu tranh phòng, chống lãng phí ngang với chống tham nhũng.",
      "D. Thực hiện việc công khai hóa các báo cáo tài chính của mọi người dân."
    ],
    "answer": 2
  },
  {
    "question": "Câu 19. Nghị quyết Đại hội XIV định hướng việc phát triển văn hóa, con người Việt Nam như thế nào?",
    "options": [
      "A. Văn hóa là sức mạnh nội sinh, động lực mạnh mẽ để phát triển đất nước.",
      "B. Văn hóa là lĩnh vực giải trí nhằm nâng cao đời sống tinh thần cho nhân dân.",
      "C. Văn hóa là phương tiện để giới thiệu hình ảnh đất nước với khách quốc tế.",
      "D. Văn hóa là nền tảng để thu hút các nguồn vốn đầu tư từ nước ngoài về."
    ],
    "answer": 0
  },
  {
    "question": "Câu 20. Về nhiệm vụ bảo vệ Tổ quốc, Nghị quyết Đại hội XIV xác định phương châm cốt lõi là gì?",
    "options": [
      "A. Sẵn sàng chiến đấu để đánh thắng mọi kẻ thù khi chúng xâm phạm lãnh thổ.",
      "B. Xây dựng quân đội hiện đại để đủ sức cạnh tranh với các nước trong khu vực.",
      "C. Bảo vệ Tổ quốc từ sớm, từ xa, giữ vững môi trường hòa bình để phát triển.",
      "D. Tập trung vào việc phát triển vũ khí hạt nhân để tăng cường sức mạnh quân sự."
    ],
    "answer": 2
  },
  {
    "question": "Câu 21. Đại hội XIV của Đảng, một trong những “nút thắt” lớn nhất cần tháo gỡ để phát triển đất nước hiện nay là gì?",
    "options": [
      "A. Sự thiếu hụt về nguồn vốn đầu tư từ các ngân hàng thương mại nhà nước.",
      "B. Hệ thống hạ tầng giao thông kết nối giữa các vùng miền còn chưa đồng bộ.",
      "C. Những điểm nghẽn về thể chế, chính sách chưa bắt kịp yêu cầu thực tiễn.",
      "D. Nguồn tài nguyên khoáng sản đang ngày càng bị cạn kiệt do khai thác quá mức."
    ],
    "answer": 2
  },
  {
    "question": "Câu 22. Để xây dựng “thế trận lòng dân” vững chắc, Nghị quyết Đại hội XIV nhấn mạnh nội dung nào?",
    "options": [
      "A. Thực hiện tốt dân chủ, bảo đảm quyền làm chủ thực chất của nhân dân.",
      "B. Tăng cường việc tuyên truyền các văn bản pháp luật đến tận từng hộ gia đình.",
      "C. Xây dựng thêm nhiều công trình công cộng phục vụ lợi ích của cộng đồng.",
      "D. Tổ chức các cuộc thi tìm hiểu về lịch sử Đảng cho mọi tầng lớp nhân dân."
    ],
    "answer": 0
  },
  {
    "question": "Câu 23. Tại sao Đại hội XIV của Đảng coi chuyển đổi số là một “cuộc cách mạng” thực sự?",
    "options": [
      "A. Vì nó thay đổi hoàn toàn phương thức sản xuất và đời sống xã hội.",
      "B. Vì nó giúp tiết kiệm được một lượng lớn giấy tờ trong các văn phòng.",
      "C. Vì nó yêu cầu mọi người dân phải có một chiếc điện thoại thông minh.",
      "D. Vì nó là nhiệm vụ bắt buộc của các quốc gia đang phát triển hiện nay."
    ],
    "answer": 0
  },
  {
    "question": "Câu 24. Điểm mới về mô hình tăng trưởng kinh tế trong Nghị quyết Đại hội XIV là gì?",
    "options": [
      "A. Tăng trưởng dựa trên việc mở rộng tối đa diện tích canh tác nông nghiệp.",
      "B. Tăng trưởng dựa trên việc gia tăng số lượng công nhân lao động phổ thông.",
      "C. Tăng trưởng dựa trên năng suất, chất lượng và đổi mới sáng tạo số.",
      "D. Tăng trưởng dựa trên việc vay vốn ưu đãi từ các định chế tài chính quốc tế."
    ],
    "answer": 2
  },
  {
    "question": "Câu 25. Đại hội XIV của Đảng, xác định trong kỷ nguyên vươn mình, nhiệm vụ nào được coi là “then chốt” của xây dựng Đảng?",
    "options": [
      "A. Công tác cán bộ, xây dựng đội ngũ đủ phẩm chất, năng lực và uy tín.",
      "B. Việc phát triển thêm số lượng đảng viên mới trong các doanh nghiệp tư nhân.",
      "C. Việc tổ chức các lớp học tập nghị quyết định kỳ hàng năm cho đảng viên.",
      "D. Việc hiện đại hóa các phòng họp và trang thiết bị làm việc của cấp ủy."
    ],
    "answer": 0
  },
  {
    "question": "Câu 26. Đại hội XIV của Đảng, quốc phòng, an ninh trong kỷ nguyên mới được gắn kết chặt chẽ với yếu tố nào?",
    "options": [
      "A. Gắn kết chặt chẽ, hài hòa giữa phát triển kinh tế, xã hội với quốc phòng, an ninh.",
      "B. Gắn kết với việc mua sắm thêm nhiều trang thiết bị quân sự từ nước ngoài.",
      "C. Gắn kết với việc tăng cường diễn tập quân sự tại tất cả các cấp học phổ thông.",
      "D. Gắn kết với việc hạn chế các hoạt động giao lưu văn hóa với người nước ngoài."
    ],
    "answer": 0
  },
  {
    "question": "Câu 27. Nghị quyết Đại hội XIV xác định “nguồn lực nội sinh” của dân tộc bao gồm những gì?",
    "options": [
      "A. Các mỏ khoáng sản quý hiếm và nguồn tài nguyên rừng vàng biển bạc hiện nay.",
      "B. Lượng tiền tiết kiệm của người dân và các nguồn kiều hối gửi về hàng năm.",
      "C. Giá trị văn hóa, sức mạnh con người và khối đại đoàn kết toàn dân tộc.",
      "D. Hệ thống các cảng biển nước sâu và sân bay quốc tế hiện đại khắp cả nước."
    ],
    "answer": 2
  },
  {
    "question": "Câu 28. Tư duy phát triển bền vững Đại hội XIV của Đảng thể hiện qua việc xử lý mối quan hệ nào?",
    "options": [
      "A. Giữa tăng trưởng kinh tế với phát triển văn hóa và bảo vệ môi trường.",
      "B. Giữa việc sản xuất hàng hóa phục vụ trong nước và việc xuất khẩu ra ngoài.",
      "C. Giữa việc sử dụng lao động trẻ và việc chăm sóc những người già hiện nay.",
      "D. Giữa việc phát triển các khu đô thị mới và giữ gìn các làng nghề cổ truyền."
    ],
    "answer": 0
  },
  {
    "question": "Câu 29. Một điểm mới trong phương thức lãnh đạo của Đảng được nêu tại Nghị quyết Đại hội XIV là gì?",
    "options": [
      "A. Tăng cường việc ban hành các chỉ thị bằng văn bản giấy đến tận cấp cơ sở.",
      "B. Đổi mới mạnh mẽ phương thức lãnh đạo theo hướng cầm quyền khoa học.",
      "C. Trực tiếp can thiệp vào các hoạt động sản xuất kinh doanh của các tập đoàn.",
      "D. Chỉ tập trung vào việc giám sát các hoạt động của các cơ quan lập pháp."
    ],
    "answer": 1
  },
  {
    "question": "Câu 30. Vấn đề “chống lãng phí” được Nghị quyết Đại hội XIV đặc biệt nhấn mạnh vì lý do gì?",
    "options": [
      "A. Vì nguồn ngân sách nhà nước đang gặp khó khăn do các tác động bên ngoài.",
      "B. Vì người dân đang có xu hướng tiêu dùng quá nhiều các loại hàng ngoại nhập.",
      "C. Vì lãng phí làm suy yếu nguồn lực đất nước và niềm tin của Nhân dân.",
      "D. Vì đây là một phong trào để thi đua giữa các đơn vị trong hệ thống chính trị."
    ],
    "answer": 2
  },
  {
    "question": "Câu 1. Phương châm Đại hội Đảng bộ Quân đội lần thứ XII là gì?",
    "options": [
      "A. Đoàn kết - Đổi mới - Phát triển - Bền vững",
      "B. Dân chủ - Kỷ cương - Trách nhiệm - Hiệu quả",
      "C. Đoàn kết - Dân chủ - Kỷ cương - Kiên định - Đột phá - Phát triển",
      "D. Kiên định - Đổi mới - Hội nhập - Phát triển"
    ],
    "answer": 2
  },
  {
    "question": "Câu 2. Chủ đề của Đại hội Đảng bộ Quân đội lần thứ XII là gì?",
    "options": [
      "A. “Phát huy truyền thống Quân đội anh hùng, xây dựng Đảng bộ trong sạch, vững mạnh toàn diện, mẫu mực, tiêu biểu, Quân đội cách mạng, chính quy, tinh nhuệ, hiện đại.",
      "B. Nâng cao sức mạnh quốc phòng, bảo vệ vững chắc Tổ quốc Việt Nam xã hội chủ nghĩa, góp phần xây dựng đất nước hòa bình, giàu mạnh, phồn vinh, văn minh, hạnh phúc”.",
      "C. Nâng cao sức mạnh quốc phòng, bảo vệ vững chắc Tổ quốc Việt Nam xã hội chủ nghĩa”.",
      "D. Cả a và b đều đúng."
    ],
    "answer": 3
  },
  {
    "question": "Câu 3. Trong nhiệm kỳ 2020 - 2025 kết quả xây dựng Đảng bộ về tư tưởng đã được Đại hội Đảng bộ Quân đội lần thứ XII đánh giá như thế nào?",
    "options": [
      "A. Tiếp tục được đổi mới mạnh mẽ, đi vào chiều sâu, góp phần nâng cao nhận thức, tăng cường đoàn kết, thống nhất trong cấp uỷ, tổ chức đảng và cơ quan, đơn vị.",
      "B. Nội dung, hình thức giáo dục chính trị tư tưởng có nhiều đổi mới.",
      "C. Công tác giáo dục, định hướng tư tưởng góp phần củng cố bản lĩnh chính trị.",
      "D. Chất lượng giáo dục chính trị tư tưởng từng bước được nâng lên."
    ],
    "answer": 0
  },
  {
    "question": "Câu 4. Những kết quả nổi bật về xây dựng và phát triển công nghiệp quốc phòng trong nhiệm kỳ 2020 – 2025?",
    "options": [
      "A. Sản xuất một số sản phẩm lưỡng dụng, hiện đại, phục vụ công nghiệp hoá, hiện đại hoá đất nước.",
      "B. Công nghiệp quốc phòng giữ vai trò là mũi nhọn của công nghiệp quốc gia.",
      "C. Doanh nghiệp công nghiệp quốc phòng tiên phong trong phát triển khoa học, công nghệ và đổi mới sáng tạo.",
      "D. Tất cả các đáp án trên đều đúng."
    ],
    "answer": 3
  },
  {
    "question": "Câu 5. Một trong những nhiệm vụ trọng tâm của nhiệm kỳ 2020-2025 là hoàn thành điều chỉnh tổ chức Quân đội theo hướng nào?",
    "options": [
      "A. Tinh, gọn, mạnh.",
      "B. Hiện đại, tinh nhuệ.",
      "C. Quy mô lớn, đa dạng.",
      "D. Tập trung, thống nhất."
    ],
    "answer": 0
  },
  {
    "question": "Câu 6.  Kết quả nổi bật xây dựng Đảng bộ về công tác cán bộ trong nhiệm kỳ 2020 - 2025 được Đại hội Đảng bộ Quân đội đánh giá như thế nào?",
    "options": [
      "A. Công tác cán bộ được đặc biệt chú trọng, đạt nhiều kết quả tích cực; kịp thời cụ thể hoá các chủ trương, quy định của Đảng sát với thực tiễn Quân đội.",
      "B. Quy hoạch cán bộ quản lý, chỉ huy các cấp bảo đảm thống nhất, liên thông giữa các cấp và chuyển tiếp vững chắc giữa các thế hệ.",
      "C. Công tác luân chuyển, đào tạo, bồi dưỡng cán bộ có nhiều đổi mới; việc tuyển dụng, tuyển chọn, bố trí, sử dụng, điều động, bổ nhiệm, phong, thăng quân hàm sĩ quan, nâng lương cán bộ thực hiện đúng nguyên tắc, quy định.",
      "D. Tất cả các đáp án đều đúng."
    ],
    "answer": 3
  },
  {
    "question": "Câu 7. Trong nhiệm kỳ 2020-2025, tỷ lệ sản phẩm vũ khí, trang bị kỹ thuật do công nghiệp quốc phòng trong nước sản xuất và trang bị cho Quân đội là bao nhiêu?",
    "options": [
      "A. Trên 60%.",
      "B. Trên 70%.",
      "C. Trên 80%.",
      "D. Trên 90%."
    ],
    "answer": 2
  },
  {
    "question": "Câu 8. Trong Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII, hạn chế, khuyết điểm trong nhiệm kỳ 2020 - 2025 về công tác quán triệt và triển khai các nghị quyết, chỉ thị của Đảng là gì?",
    "options": [
      "A. Ở một số nơi, việc quán triệt, triển khai các nghị quyết, chỉ thị, quy định của Đảng và pháp luật của Nhà nước về quốc phòng chưa đầy đủ, kịp thời.",
      "B. Chất lượng huấn luyện và sẵn sàng chiến đấu ở một số đơn vị chưa đồng đều.",
      "C. Việc cụ thể hóa một số chủ trương về quân sự, quốc phòng còn chậm.",
      "D. Công tác nắm bắt tình hình tư tưởng bộ đội ở một số đơn vị chưa sâu sát."
    ],
    "answer": 0
  },
  {
    "question": "Câu 9. Hạn chế, khuyết điểm về công tác thanh tra, kiểm tra, giám sát trong nhiệm kỳ 2020 - 2025 được nêu ra trong Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII là.",
    "options": [
      "A. Chất lượng các cuộc kiểm tra có thời điểm chưa đạt yêu cầu.",
      "B. Công tác thanh tra, kiểm tra, giám sát có nội dung còn hạn chế, có vụ việc phát hiện chậm.",
      "C. Tiến hành chưa thường xuyên.",
      "D. Còn bị động."
    ],
    "answer": 1
  },
  {
    "question": "Câu 10. Hạn chế, khuyết điểm về chấp hành kỷ luật Quân đội và pháp luật Nhà nước được nêu ra trong Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII là.",
    "options": [
      "A. Duy trì chưa thường xuyên, thiếu biện pháp cụ thể.",
      "B. Còn bị động, thiếu quyết liệt, chủ yếu chạy theo vụ việc.",
      "C. Cấp uỷ chỉ huy các cấp còn đơn giản, thiếu biện pháp để ngăn chặn các vụ việc vi phạm kỷ luật.",
      "D. Việc chấp hành kỷ luật Quân đội, pháp luật nhà nước tuy có chuyển biến nhưng chưa thực sự vững chắc, vụ việc nghiêm trọng còn xảy ra ảnh hưởng đến uy tín, truyền thống của Quân đội, hình ảnh “Bộ đội Cụ Hồ”."
    ],
    "answer": 3
  },
  {
    "question": "Câu 11. Hạn chế, khuyết điểm về cải cách hành chính, chuyển đổi số được nêu ra trong Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII là.",
    "options": [
      "A. Có nội dung chưa đáp ứng được yêu cầu.",
      "B. Công tác phối hợp giữa một số cơ quan, đơn vị trong tổ chức thực hiện nhiệm vụ có lúc chưa thật sự chặt chẽ, hiệu quả chưa đồng đều",
      "C. Hiệu quả hợp tác trong một số hoạt động chưa tương xứng với tiềm năng và yêu cầu nhiệm vụ.",
      "D. Việc quy hoạch, đào tạo, bồi dưỡng và sử dụng cán bộ có nội dung chưa thật sự đồng bộ, hiệu quả."
    ],
    "answer": 0
  },
  {
    "question": "Câu 12. Nguyên nhân chủ quan để xảy ra các vụ việc vi phạm kỷ luật trong nhiệm kỳ 2020 - 2025 được nêu ra trong Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII là.",
    "options": [
      "A. Công tác lãnh đạo, chỉ đạo và tổ chức thực hiện nhiệm vụ ở một số cơ quan, đơn vị có thời điểm chưa thật sâu sát, thiếu quyết liệt.",
      "B. Công tác giáo dục chính trị, quản lý tư tưởng và các mối quan hệ của cán bộ, chiến sĩ có cấp uỷ, chi bộ chưa chủ động, nhạy bén.",
      "C. Việc cụ thể hóa một số chủ trương, nghị quyết của cấp trên vào chương trình, kế hoạch thực hiện ở một số cơ quan, đơn vị có lúc còn chậm, thiếu đồng bộ.",
      "D. Khả năng tham mưu tháo gỡ khó khăn, vướng mắc trong thực tiễn có nội dung hiệu quả chưa cao."
    ],
    "answer": 1
  },
  {
    "question": "Câu 13. Những nội dung nào sau đây được xem là bài học kinh nghiệm rút ra sau 5 năm thực hiện Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XI, góp phần nâng cao sức mạnh tổng hợp của Quân đội?",
    "options": [
      "A. Giữ vững và tăng cường sự lãnh đạo tuyệt đối, trực tiếp về mọi mặt của Đảng đối với Quân đội.",
      "B. Xây dựng Quân đội vững mạnh về mọi mặt, lấy xây dựng vững mạnh về chính trị làm cơ sở.",
      "C. Coi trọng tổng kết thực tiễn, nghiên cứu phát triển lý luận, gắn chặt với xây dựng, hoàn thiện thể chế, cơ chế, chính sách.",
      "D. Tất cả các đáp án đều đúng"
    ],
    "answer": 3
  },
  {
    "question": "Câu 14. Những nội dung nào sau đây phản ánh bài học kinh nghiệm về xây dựng khối đoàn kết, phát huy sức mạnh tổng hợp trong Quân đội và sự ủng hộ quốc tế trong thực hiện Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XI?",
    "options": [
      "A. Xây dựng, chỉnh đốn Đảng trong sạch, vững mạnh.",
      "B. Kết hợp phát triển kinh tế – xã hội với quốc phòng, an ninh.",
      "C. Xây dựng Quân đội vững mạnh về chính trị, nâng cao sức mạnh chiến đấu.",
      "D. Tăng cường đoàn kết thống nhất trong toàn quân và đoàn kết, gắn bó máu thịt quân-dân; phát huy sức mạnh tổng hợp của khối đại đoàn kết toàn dân tộc, kết hợp sự ủng hộ của bạn bè quốc tế đối với sự nghiệp quốc phòng."
    ],
    "answer": 3
  },
  {
    "question": "Câu 15. Nội dung nào sau đây phản ánh bài học kinh nghiệm về kiểm soát quyền lực, giữ vững kỷ luật và nguyên tắc lãnh đạo trong Quân sau 5 năm thực hiện Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XI?",
    "options": [
      "A. Kiên định mục tiêu, kết hợp kinh tế – quốc phòng.",
      "B. Đổi mới tư duy lãnh đạo, nâng cao hiệu lực quản lý.",
      "C. Phát huy tinh thần tự lực, ứng dụng khoa học – công nghệ.",
      "D. Chủ động kiểm tra, giám sát và kiểm soát quyền lực, giữ vững nguyên tắc lãnh đạo, kỷ luật, kỷ cương."
    ],
    "answer": 3
  },
  {
    "question": "Câu 16. Mục tiêu chủ yếu về phát triển KHCN, đổi mới sáng tạo và chuyển đổi số đến năm 2030 thuộc nhóm nước nào?",
    "options": [
      "A. Thuộc nhóm dẫn đầu quốc gia, một số lĩnh vực đạt trình độ quốc tế.",
      "B. Thuộc nhóm dẫn đầu, một số lĩnh vực đạt trình độ khu vực.",
      "C. Một số lĩnh vực đạt trình độ Châu á.",
      "D. Một số lĩnh vực đạt trình độ khu vực Đông Nam á."
    ],
    "answer": 0
  },
  {
    "question": "Câu 17. Mục tiêu cốt lõi trong xây dựng công nghiệp quốc phòng 5 năm tới là gì?",
    "options": [
      "A. Làm chủ công nghệ nền, công nghệ lõi, công nghệ tiên tiến, lưỡng dụng",
      "B. Tập trung nhập khẩu hoàn toàn vũ khí hiện đại",
      "C. Chỉ phát triển công nghiệp dân dụng",
      "D. Giảm đầu tư cho nghiên cứu, chế tạo"
    ],
    "answer": 0
  },
  {
    "question": "Câu 18. Nội dung nào phản ánh đúng định hướng phát triển sản phẩm công nghiệp quốc phòng được Đại hội Đảng bộ Quân đội lần thứ XII xác định?",
    "options": [
      "A. Chỉ sản xuất trang bị thông thường, giá rẻ",
      "B. Không cần nghiên cứu, thiết kế trong nước",
      "C. Phụ thuộc hoàn toàn vào công nghệ nhập khẩu",
      "D. Sản xuất vũ khí trang bị có ý nghĩa chiến lược, hiện đại, hàm lượng công nghệ cao"
    ],
    "answer": 3
  },
  {
    "question": "Câu 19. Công nghệ nào được xác định cần tích hợp vào vũ khí, trang bị được Đại hội Đảng bộ Quân đội lần thứ XII xác định?",
    "options": [
      "A. Công nghệ phân tích dữ liệu lớn (Big Data)",
      "B. Công nghệ thủ công truyền thống",
      "C. Công nghệ sản xuất nhỏ lẻ",
      "D. Công nghệ lạc hậu, tiêu tốn năng lượng"
    ],
    "answer": 0
  },
  {
    "question": "Câu 20. Một trong những mục tiêu về hệ thống chỉ huy trong công nghiệp quốc phòng được Đại hội Đảng bộ Quân đội lần thứ XII xác định?",
    "options": [
      "A. Duy trì hoàn toàn phương thức chỉ huy thủ công",
      "B. Không cần hiện đại hoá hệ thống chỉ huy",
      "C. Xây dựng hệ thống tự động hoá chỉ huy các cấp (C4ISR)",
      "D. Tách rời công nghệ thông tin khỏi chỉ huy"
    ],
    "answer": 2
  },
  {
    "question": "Câu 21. Đại hội Đảng bộ Quân đội lần thứ XII xác định mục đích hằng năm có bao nhiêu tổ chức đảng, cán bộ, đảng viên hoàn thành tốt và xuất sắc nhiệm vụ?",
    "options": [
      "A. Hằng năm có trên 70% tổ chức đảng, cán bộ, đảng viên hoàn thành tốt và xuất sắc nhiệm vụ.",
      "B. Hằng năm có trên 75% tổ chức đảng, cán bộ, đảng viên hoàn thành tốt và xuất sắc nhiệm vụ.",
      "C. Hằng năm có trên 80% tổ chức đảng, cán bộ, đảng viên hoàn thành tốt và xuất sắc nhiệm vụ.",
      "D. Hằng năm có trên 90% tổ chức đảng, cán bộ, đảng viên hoàn thành tốt và xuất sắc nhiệm vụ"
    ],
    "answer": 3
  },
  {
    "question": "Câu 22. Mục tiêu chung về huấn luyện, giáo dục và đào tạo trong nhiệm kỳ 2025 -20230  được Đại hội Đảng bộ Quân đội lần thứ XII xác định?",
    "options": [
      "A. Đáp ứng yêu cầu nhiệm vụ trong tình hình mới, chiến tranh công nghệ cao; phát triển nguồn nhân lực chất lượng cao",
      "B. Chỉ tập trung huấn luyện chiến thuật cơ bản",
      "C. Giảm quy mô đào tạo trong Quân đội",
      "D. Không chú trọng phát triển nguồn nhân lực"
    ],
    "answer": 0
  },
  {
    "question": "Câu 23. Chỉ tiêu về chất lượng huấn luyện được Đại hội Đảng bộ Quân đội lần thứ XII xác định như thế nào?",
    "options": [
      "A. 70% trở lên đơn vị đạt tiêu chuẩn huấn luyện giỏi",
      "B. 50% đơn vị đạt tiêu chuẩn huấn luyện giỏi",
      "C. 100% đơn vị đạt trung bình",
      "D. Không quy định chỉ tiêu cụ thể"
    ],
    "answer": 0
  },
  {
    "question": "Câu 24. Nghị quyết Đại hội đảng bộ Quân đội lần thứ XII xác định tỷ lệ vi phạm kỷ luật trong toàn quân trong nhiệm kỳ mới là gì?",
    "options": [
      "A. Tỉ lệ vi phạm kỷ luật dưới 0,1%.",
      "B. Tỉ lệ vi phạm kỷ luật dưới 0,2%.",
      "C. Tỉ lệ vi phạm kỷ luật dưới 0,3%.",
      "D. Tỉ lệ vi phạm kỷ luật dưới 0,4%."
    ],
    "answer": 1
  },
  {
    "question": "Câu 27. Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định mục tiêu bảo đảm, bảo quản vũ khí, trang bị như thế nào?",
    "options": [
      "A. Bảo đảm 100% vũ khí, trang bị có nhà che; 50% nhà kho cấp chiến lược được xây dựng, quản lý theo mô hình ứng dụng công nghệ cao.",
      "B. bảo đảm 100% vũ khí, trang bị có nhà che; 60% nhà kho cấp chiến lược được xây dựng, quản lý theo mô hình ứng dụng công nghệ cao.",
      "C. bảo đảm 100% vũ khí, trang bị có nhà che; 70% nhà kho cấp chiến lược được xây dựng, quản lý theo mô hình ứng dụng công nghệ cao.",
      "D. bảo đảm 100% vũ khí, trang bị có nhà che; 80% nhà kho cấp chiến lược được xây dựng, quản lý theo mô hình ứng dụng công nghệ cao."
    ],
    "answer": 0
  },
  {
    "question": "Câu 28. Chỉ tiêu quân số khỏe hằng năm mà Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định đó là.",
    "options": [
      "A. Trên 98,5%",
      "B. Trên 98,6%",
      "C. Trên 98,7%",
      "D. Trên 98,8%"
    ],
    "answer": 0
  },
  {
    "question": "Câu 29. Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định thực hiện những đột phá nào trong nhiệm kỳ 2025 – 2030?",
    "options": [
      "A. Hoàn thiện đồng bộ thể chế quân sự, quốc phòng; huy động hiệu quả các nguồn lực xây dựng Quân đội cách mạng, chính quy, tinh nhuệ, hiện đại",
      "B. Tập trung phát triển nguồn nhân lực chất lượng cao; đẩy mạnh thu hút, trọng dụng nhân tài, xây dựng đội ngũ cán bộ đáp ứng yêu cầu xây dựng Quân đội hiện đại; nâng cao chất lượng xây dựng chính qui, quản lý kỷ luật; phát huy giá trị văn hoá “Bộ đội đội Cụ Hồ” thời kỳ mới.",
      "C. Đẩy mạnh phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số; phát triển công nghiệp quốc phòng tự chủ, tự lực, tự cường, lưỡng dụng, hiện đại.",
      "D. Tất cả đáp án trên đều đúng."
    ],
    "answer": 3
  },
  {
    "question": "Câu 30. Phương hướng nào trong nhiệm kỳ 2025-2030 đề cập trực tiếp đến chỉ đạo của Tổng Bí thư được Nghị quyết Đại hội đại biểu Đảng bộ Quân đội lần thứ XII xác định?",
    "options": [
      "A. Thực hiện chỉ đạo “2 kiên định, 2 đẩy mạnh, 2 ngăn ngừa”",
      "B. Thực hiện “3 xây, 3 chống”",
      "C. Thực hiện “4 không”",
      "D. Thực hiện “5 rõ”"
    ],
    "answer": 0
  },
  {
    "question": "Câu 1. Đại hội Đảng bộ Quân khu lần thứ XI xác định phương châm là gì?",
    "options": [
      "A. Đoàn kết - Sáng tạo - Kỷ cương - Phát triển.",
      "B. Dân chủ - Đổi mới - Kỷ cương - Trách nhiệm.",
      "C. Dân chủ - Đoàn kết - Kỷ cương - Sáng tạo - Đổi mới.",
      "D. Kỷ cương - Đột phá - Trách nhiệm - Đổi mới."
    ],
    "answer": 2
  },
  {
    "question": "Câu 2. Khi đánh giá về những hạn chế, Đại hội Đảng bộ Quân khu lần thứ XI chỉ ra điểm yếu nào trong công tác nắm tình hình và tuyển quân?",
    "options": [
      "A. Công tác nắm tình hình đôi khi còn chủ quan, phiến diện.",
      "B. Công tác tuyển quân chưa đạt đủ số lượng chỉ tiêu đề ra.",
      "C. Công tác phối hợp nắm tình hình có thời điểm chưa kịp thời; tuyển chọn, gọi công dân nhập ngũ có địa phương chưa chặt chẽ.",
      "D. Sự phối hợp giữa các địa phương trong công tác nắm tình hình còn chưa đồng bộ."
    ],
    "answer": 2
  },
  {
    "question": "Câu 3. Đại hội Đảng bộ Quân khu lần thứ XI đánh giá như thế nào về việc thực hiện đột phá xây dựng chính quy, chấp hành pháp luật, kỷ luật?",
    "options": [
      "A. Chuyển biến chưa vững chắc, còn xảy ra vi phạm pháp luật, kỷ luật, có vụ việc nghiêm trọng.",
      "B. Đã tạo được bước đột phá mạnh mẽ, không còn vi phạm pháp luật nghiêm trọng.",
      "C. Tình hình kỷ luật đã đi vào nền nếp, bảo đảm an toàn tuyệt đối.",
      "D. Các cơ quan, đơn vị đều đạt tiêu chuẩn vững mạnh toàn diện, mẫu mực tiêu biểu."
    ],
    "answer": 0
  },
  {
    "question": "Câu 4. Trong phần đánh giá khuyết điểm, Đại hội Đảng bộ Quân khu lần thứ XI chỉ ra năng lực lãnh đạo, sức chiến đấu của một số cấp ủy cơ sở có mặt còn hạn chế ở nội dung nào?",
    "options": [
      "A. Chưa duy trì đúng chế độ sinh hoạt đảng định kỳ theo quy định.",
      "B. Thiếu tinh thần tự phê bình và phê bình trong sinh hoạt đảng.",
      "C. Năng lực lãnh đạo, sức chiến đấu có mặt còn hạn chế; công tác giám sát thường xuyên chưa hiệu quả.",
      "D. Chưa bám sát hướng dẫn của cấp trên trong triển khai thực hiện nhiệm vụ."
    ],
    "answer": 2
  },
  {
    "question": "Câu 5. Đại hội Đảng bộ Quân khu lần thứ XI đánh giá công tác giáo dục, quản lý, rèn luyện, bồi dưỡng đội ngũ cán bộ hiện nay như thế nào?",
    "options": [
      "A. Đội ngũ cán bộ chưa đáp ứng được yêu cầu về trình độ chuyên môn nghiệp vụ.",
      "B. Một bộ phận cán bộ còn có tư tưởng ngại khó, ngại khổ trong công tác.",
      "C. Công tác giáo dục, quản lý, rèn luyện, bồi dưỡng đội ngũ cán bộ chưa toàn diện; một số cán bộ trách nhiệm, năng lực còn hạn chế, chưa gương mẫu trong đạo đức, lối sống.",
      "D. Cán bộ chủ trì chưa thể hiện được vai trò trung tâm đoàn kết tại đơn vị."
    ],
    "answer": 2
  },
  {
    "question": "Câu 7. Đánh giá về công tác hậu cần, Đại hội Đảng bộ Quân khu lần thứ XI chỉ ra điểm yếu nào cần rút kinh nghiệm trong nhiệm kỳ qua?",
    "options": [
      "A. Diện tích tăng gia sản xuất chưa được các đơn vị mở rộng đúng mức.",
      "B. Chưa chủ động tự túc được nguồn thực phẩm tại chỗ cho cán bộ, chiến sĩ.",
      "C. Công tác hậu cần một số chỉ tiêu, nhiệm vụ chưa đạt; một số mô hình tăng gia sản xuất chưa hiệu quả; xử lý các tồn đọng để chuyển sang công ty cổ phần còn gặp nhiều khó khăn.",
      "D. Công tác quản lý tài chính trong các mô hình tăng gia chưa thật sự chặt chẽ."
    ],
    "answer": 2
  },
  {
    "question": "Câu 8. Đại hội Đảng bộ Quân khu lần thứ XI xác định chỉ tiêu xây dựng sở chỉ huy cơ bản cấp tỉnh đạt tỷ lệ bao nhiêu trong nhiệm kỳ?",
    "options": [
      "A. Phấn đấu đạt trên 90% chỉ tiêu đề ra.",
      "B. Hoàn thành 95% mục tiêu xây dựng sở chỉ huy các cấp.",
      "C. Hoàn thành 100% sở chỉ huy cơ bản cấp tỉnh.",
      "D. Cơ bản hoàn thành các hạng mục sở chỉ huy trọng yếu tại địa phương."
    ],
    "answer": 2
  },
  {
    "question": "Câu 9. Trong công tác tuyển quân, Đại hội Đảng bộ Quân khu lần thứ XI xác định chỉ tiêu công dân nhập ngũ đã tốt nghiệp cao đẳng, đại học đạt tỷ lệ nào?",
    "options": [
      "A. Phấn đấu đạt tỷ lệ từ 7,0% trở lên.",
      "B. Phấn đấu đạt tỷ lệ từ 8,0% trở lên.",
      "C. Phấn đấu đạt tỷ lệ từ 9,0% trở lên.",
      "D. Phấn đấu đạt tỷ lệ từ 10,0% trở lên."
    ],
    "answer": 2
  },
  {
    "question": "Câu 10. Đại hội Đảng bộ Quân khu lần thứ XI xác định chỉ tiêu tỷ lệ đảng viên trong lực lượng Dự bị động viên đạt bao nhiêu?",
    "options": [
      "A. Đạt tỷ lệ 10% trở lên.",
      "B. Đạt tỷ lệ 12% trở lên.",
      "C. Đạt tỷ lệ 15% trở lên.",
      "D. Đạt tỷ lệ 20% trở lên."
    ],
    "answer": 0
  },
  {
    "question": "Câu 11. Về xây dựng đơn vị an toàn, Đại hội Đảng bộ Quân khu lần thứ XI đề ra mục tiêu cụ thể như thế nào?",
    "options": [
      "A. Có 98% cơ quan, đơn vị bảo đảm an toàn về chính trị.",
      "B. Đảm bảo an toàn chính trị tuyệt đối trong các ngày kỷ niệm lớn.",
      "C. 100% cơ quan, đơn vị an toàn tuyệt đối về chính trị.",
      "D. Không để xảy ra tình trạng mất an toàn về chính trị nghiêm trọng."
    ],
    "answer": 2
  },
  {
    "question": "Câu 12. Đại hội Đảng bộ Quân khu lần thứ XI xác định chỉ tiêu hàng năm số đơn vị đạt danh hiệu huấn luyện giỏi như thế nào?",
    "options": [
      "A. Đạt mức trên 60% số đơn vị.",
      "B. Đạt mức từ 65% trở lên.",
      "C. Hằng năm có trên 70% đơn vị đạt huấn luyện giỏi.",
      "D. Phấn đấu đạt mức trên 80% số đơn vị trong toàn Quân khu."
    ],
    "answer": 2
  },
  {
    "question": "Câu 13. Đại hội Đảng bộ Quân khu lần thứ XI xác định chỉ tiêu cán bộ, nhân viên sử dụng được một ngoại ngữ hoặc tiếng dân tộc thiểu số đến cuối nhiệm kỳ như thế nào?",
    "options": [
      "A. Đạt tỷ lệ trên 20%.",
      "B. Đạt tỷ lệ từ 25% trở lên.",
      "C. Phấn đấu đạt trên 30% cán bộ, nhân viên.",
      "D. Phấn đấu đạt tỷ lệ 50% cán bộ các cấp."
    ],
    "answer": 2
  },
  {
    "question": "Câu 14. Để tăng cường kỷ luật quân đội, Đại hội Đảng bộ Quân khu lần thứ XI xác định chỉ tiêu tỷ lệ vi phạm kỷ luật quân đội như thế nào?",
    "options": [
      "A. Duy trì ở mức dưới 0,1%.",
      "B. Tỷ lệ vi phạm kỷ luật dưới 0,2%.",
      "C. Duy trì ở mức dưới 0,3%.",
      "D. Duy trì ở mức dưới 0,5%."
    ],
    "answer": 1
  },
  {
    "question": "Câu 15. Đại hội Đảng bộ Quân khu lần thứ XI xác định giá trị thu từ tăng gia sản xuất, chế biến và dịch vụ hậu cần bình quân đạt bao nhiêu?",
    "options": [
      "A. Bình quân đạt trên 1,6 triệu đồng/người/năm.",
      "B. Bình quân đạt trên 1,5 triệu đồng/người/năm.",
      "C. Bình quân đạt trên 1,8 triệu đồng/người/năm.",
      "D. Bình quân đạt trên 2,0 triệu đồng/người/năm."
    ],
    "answer": 0
  },
  {
    "question": "Câu 16. Đại hội Đảng bộ Quân khu lần thứ XI xác định mục tiêu quân số khỏe trong Lực lượng vũ trang Quân khu phải đạt tỷ lệ như thế nào?",
    "options": [
      "A. Đạt từ 98% trở lên.",
      "B. Đạt từ 99% trở lên.",
      "C. Đạt từ 99,2% trở lên.",
      "D. Đạt từ 99,5% trở lên."
    ],
    "answer": 2
  },
  {
    "question": "Câu 17. Đại hội Đảng bộ Quân khu lần thứ XI xác định lộ trình đến năm 2030, tỷ lệ cơ quan, đơn vị được sử dụng nước sạch là bao nhiêu?",
    "options": [
      "A. Phấn đấu đạt 90% tổng số đơn vị.",
      "B. Đạt 100% các đơn vị từ cấp tiểu đoàn và tương đương trở lên.",
      "C. 100% cơ quan, đơn vị được sử dụng nước sạch theo tiêu chuẩn.",
      "D. Cơ bản hoàn thành hệ thống mạng lưới cấp nước sạch."
    ],
    "answer": 2
  },
  {
    "question": "Câu 18. Về công tác kỹ thuật, Đại hội Đảng bộ Quân khu lần thứ XI xác định hệ số kỹ thuật (Kt) đối với nhóm Sẵn sàng chiến đấu, cứu hộ cứu nạn bằng bao nhiêu?",
    "options": [
      "A. Hệ số kỹ thuật đạt 0,95.",
      "B. Hệ số kỹ thuật đạt từ 0,9 đến 1,0.",
      "C. Hệ số kỹ thuật bằng 1,0.",
      "D. Duy trì hệ số kỹ thuật ở mức cao nhất theo quy định."
    ],
    "answer": 2
  },
  {
    "question": "Câu 19. Đại hội Đảng bộ Quân khu lần thứ XI xác định hệ số kỹ thuật (Kt) đối với nhóm huấn luyện chiến đấu phải đạt mức như thế nào?",
    "options": [
      "A. Đạt từ 0,95 đến 1,0.",
      "B. Đạt từ 0,9 đến 0,95.",
      "C. Đạt mức 0,85 trở lên.",
      "D. Luôn duy trì ở mức 1,0."
    ],
    "answer": 0
  },
  {
    "question": "Câu 20. Đại hội Đảng bộ Quân khu lần thứ XI xác định chỉ tiêu bảo đảm nhà che cho vũ khí, trang bị hiện có đạt tỷ lệ như thế nào?",
    "options": [
      "A. 90% tổng số vũ khí, trang bị kỹ thuật.",
      "B. 95% đối với các loại vũ khí, trang bị kỹ thuật hiện đại.",
      "C. Bảo đảm 100% vũ khí, trang bị có nhà che.",
      "D. Ưu tiên bảo đảm nhà che cho các khí tài làm nhiệm vụ SSCĐ."
    ],
    "answer": 2
  },
  {
    "question": "Câu 21. Đại hội Đảng bộ Quân khu lần thứ XI xác định tỷ lệ tổ chức đảng, cán bộ, đảng viên hoàn thành tốt và hoàn thành xuất sắc nhiệm vụ hàng năm là bao nhiêu?",
    "options": [
      "A. Đạt 85% trở lên.",
      "B. Đạt 90% trở lên.",
      "C. Đạt 95% trở lên.",
      "D. 100% không có tổ chức đảng yếu kém, không hoàn thành nhiệm vụ."
    ],
    "answer": 1
  },
  {
    "question": "Câu 22. Đại hội Đảng bộ Quân khu lần thứ XI xác định chỉ tiêu kiểm tra, giám sát đối với tổ chức đảng và đảng viên trong nhiệm kỳ là bao nhiêu?",
    "options": [
      "A. Kiểm tra, giám sát đạt 90% tổ chức đảng, đảng viên.",
      "B. Kiểm tra, giám sát đạt 95% tổ chức đảng, đảng viên.",
      "C. Kiểm tra, giám sát 100% tổ chức đảng, đảng viên.",
      "D. Kiểm tra, giám sát theo kế hoạch phân bổ hàng năm."
    ],
    "answer": 2
  },
  {
    "question": "Câu 23. Đại hội Đảng bộ Quân khu lần thứ XI xác định nội dung đột phá thứ nhất tập trung vào vấn đề gì?",
    "options": [
      "A. Đổi mới, nâng cao chất lượng huấn luyện đáp ứng yêu cầu nhiệm vụ trong tình hình mới; tập trung xây dựng chính quy, chấp hành nghiêm pháp luật, kỷ luật và bảo đảm an toàn.",
      "B. Đẩy mạnh cải cách hành chính và ứng dụng chuyển đổi số quân sự.",
      "C. Nâng cao năng lực sẵn sàng chiến đấu tại các vùng địa bàn trọng điểm.",
      "D. Chấn chỉnh tổ chức biên chế theo hướng tinh, gọn, mạnh."
    ],
    "answer": 0
  },
  {
    "question": "Câu 24. Nội dung đột phá thứ hai được Đại hội Đảng bộ Quân khu lần thứ XI xác định tập trung vào yếu tố nào để thực hiện nhiệm vụ?",
    "options": [
      "A. Xây dựng khu vực phòng thủ và thế trận quốc phòng toàn dân.",
      "B. Đổi mới công tác tăng gia sản xuất và bảo đảm hậu cần tại đơn vị.",
      "C. Đẩy mạnh ứng dụng khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số trong thực hiện các nhiệm vụ của LLVT Quân khu.",
      "D. Nâng cao chất lượng công tác giáo dục chính trị và quản lý tư tưởng."
    ],
    "answer": 2
  },
  {
    "question": "Câu 25. Đại hội Đảng bộ Quân khu lần thứ XI xác định mục tiêu đột phá thứ ba về xây dựng đội ngũ cán bộ như thế nào?",
    "options": [
      "A. Chú trọng công tác đào tạo ngoại ngữ cho đội ngũ cán bộ trẻ.",
      "B. Tăng cường điều động cán bộ cho các đơn vị biên giới, hải đảo.",
      "C. Xây dựng đội ngũ cán bộ các cấp, nhất là cán bộ chủ trì có đủ phẩm chất, năng lực, uy tín đáp ứng yêu cầu, nhiệm vụ trong tình hình mới.",
      "D. Thực hiện luân chuyển cán bộ để rèn luyện qua thực tiễn cơ sở."
    ],
    "answer": 2
  },
  {
    "question": "Câu 26. Đại hội Đảng bộ Quân khu lần thứ XI xác định tỷ lệ huy động, tiếp nhận, huấn luyện lực lượng Dự bị động viên đạt chỉ tiêu bao nhiêu?",
    "options": [
      "A. Đạt 90% chỉ tiêu đề ra.",
      "B. Đạt 95% chỉ tiêu đề ra.",
      "C. Đạt 100% chỉ tiêu đề ra.",
      "D. Phấn đấu vượt chỉ tiêu theo khả năng huy động của từng địa phương."
    ],
    "answer": 1
  },
  {
    "question": "Câu 1: Theo Nghị quyết Đại hội Đảng bộ Sư đoàn lần thứ XIII, nhiệm kỳ 2025-2030, đến cuối nhiệm kỳ, chỉ tiêu cán bộ sử dụng thành thạo một ngoại ngữ hoặc tiếng dân tộc trên địa bàn đạt bao nhiêu %?",
    "options": [
      "A. Trên 20%",
      "B. Trên 30%",
      "C. Trên 40%",
      "D. Trên 50%"
    ],
    "answer": 1
  },
  {
    "question": "Câu 2: Theo Nghị quyết Đại hội Đảng bộ Sư đoàn lần thứ XIII, nhiệm kỳ 2025-2030, phấn đấu đến năm nào Sư đoàn đề nghị Đảng, Nhà nước tặng thưởng Huân chương Bảo vệ Tổ quốc hạng Nhì?",
    "options": [
      "A. Năm 2026",
      "B. Năm 2027",
      "C. Năm 2028",
      "D. Năm 2030"
    ],
    "answer": 2
  },
  {
    "question": "Câu 3: Theo Nghị quyết Đại hội Đảng bộ Sư đoàn lần thứ XIII, nhiệm kỳ 2025-2030, Sư đoàn đặt mục tiêu hoàn thành xuất bản lịch sử các Trung đoàn: 93, 94, 29 vào thời gian nào?",
    "options": [
      "A. Trong nhiệm kỳ",
      "B. Cuối nhiệm kỳ",
      "C. Năm 2027",
      "D. Năm 2028"
    ],
    "answer": 0
  },
  {
    "question": "Câu 4: Theo Nghị quyết Đại hội Đảng bộ Sư đoàn lần thứ XIII, nhiệm kỳ 2025-2030, chỉ tiêu giá trị thu từ tăng gia, chăn nuôi, chế biến đạt mức nào?",
    "options": [
      "A. 1.200.000 đồng/người/năm trở lên",
      "B. 1.500.000 đồng/người/năm trở lên",
      "C. 1.600.000 đồng/người/năm trở lên",
      "D. 2.000.000 đồng/người/năm trở lên"
    ],
    "answer": 2
  },
  {
    "question": "Câu 5: Theo Nghị quyết Đại hội Đảng bộ Sư đoàn lần thứ XIII, nhiệm kỳ 2025-2030, Mức độ tự túc thực phẩm nào của Sư đoàn đạt chỉ tiêu 100%?",
    "options": [
      "A. Thịt, cá",
      "B. Rau, củ, quả",
      "C. Trứng, sữa",
      "D. Tự túc toàn bộ thực phẩm"
    ],
    "answer": 1
  },
  {
    "question": "Câu 6: Theo Nghị quyết Đại hội Đảng bộ Sư đoàn lần thứ XIII, nhiệm kỳ 2025-2030, hệ số kỹ thuật (Kt) của Trang bị kỹ thuật (TBKT) làm nhiệm vụ SSCĐ yêu cầu đạt bao nhiêu?",
    "options": [
      "A. Kt = 0,9",
      "B. Kt = 0,95",
      "C. Kt = 1",
      "D. Kt = 0,85"
    ],
    "answer": 2
  },
  {
    "question": "Câu 7: Nhiệm kỳ 2025 - 2030, Đảng bộ Sư đoàn xác định bao nhiêu khâu đột phá?",
    "options": [
      "A. 2 khâu đột phá",
      "B. 3 khâu đột phá",
      "C. 4 khâu đột phá",
      "D. 5 khâu đột phá"
    ],
    "answer": 1
  },
  {
    "question": "Câu 8: Theo Nghị quyết Đại hội Đảng bộ Sư đoàn lần thứ XIII, nhiệm kỳ 2025-2030, khâu đột phá thứ nhất xác định nội dung trọng tâm nào?",
    "options": [
      "A. Đẩy mạnh tăng gia sản xuất",
      "B. Huấn luyện giỏi, SSCĐ cao gắn với xây dựng chính quy, quản lý kỷ luật tốt; xây dựng đơn vị DBĐV vững mạnh",
      "C. Đẩy mạnh chuyển đổi số",
      "D. Nâng cao đời sống vật chất bộ đội"
    ],
    "answer": 1
  },
  {
    "question": "Câu 9: Theo Nghị quyết Đại hội Đảng bộ Sư đoàn lần thứ XIII, nhiệm kỳ 2025-2030 phong trào nào được triển khai nhằm tạo sự chuyển biến mạnh mẽ trong cải cách hành chính quân sự và chuyển đổi số?",
    "options": [
      "A. Mỗi tuần một câu hỏi luật",
      "B. Bình dân học vụ số",
      "C. Thanh niên tiến quân vào khoa học công nghệ",
      "D. Áp dụng sáng kiến, cải tiến trong huấn luyện"
    ],
    "answer": 1
  },
  {
    "question": "Câu 10: Theo Nghị quyết Đại hội Đảng bộ Sư đoàn lần thứ XIII, nhiệm kỳ 2025-2030, phong trào thi đua nào được xác định hoàn thành xuất sắc các mục tiêu hằng năm?",
    "options": [
      "A. Phong trào Sáng tạo trẻ",
      "B. Phong trào Ngành Hậu cần Quân đội làm theo lời Bác dạy",
      "C. Phong trào Thi đua Quyết thắng (TĐQT)",
      "D. Cuộc vận động \t50"
    ],
    "answer": 0
  },
  {
    "question": "Câu 11: Theo Nghị quyết Đại hội Đảng bộ Sư đoàn lần thứ XIII, nhiệm kỳ 2025-2030, để đấu tranh bảo vệ nền tảng tư tưởng của Đảng, phương hướng tập trung phát huy vai trò của lực lượng nào?",
    "options": [
      "A. Uỷ ban kiểm tra của các tổ chức đảng trực thuộc",
      "B. Lực lượng 47",
      "C. Lực lượng Trinh sát",
      "D. Lực lượng Thanh niên xung kích"
    ],
    "answer": 1
  },
  {
    "question": "Câu 12: Theo Nghị quyết Đại hội Đảng bộ Sư đoàn lần thứ XIII, nhiệm kỳ 2025-2030, khâu đột phá về công tác cán bộ tập trung vào đối tượng nào?",
    "options": [
      "A. Cán bộ trẻ mới ra trường",
      "B. Cán bộ nằm trong diện Quy hoạch",
      "C. Đội ngũ cán bộ, nhất là cán bộ chủ trì các cấp",
      "D. Nguồn cán bộ dự bị động viên"
    ],
    "answer": 2
  },
  {
    "question": "Câu 14: Theo Nghị quyết Đại hội Đảng bộ Sư đoàn lần thứ XIII, nhiệm kỳ 2025-2030, yêu cầu về công tác quản lý tài chính trong nhiệm kỳ mới là gì?",
    "options": [
      "A. Tăng cường dân chủ, công khai, minh bạch; đẩy mạnh thực hành tiết kiệm, chống lãng phí, tiêu cực",
      "B. Cắt giảm tối đa các khoản chi tiêu",
      "C. Phân cấp toàn bộ ngân sách cho cấp cơ sở",
      "D. Theo yêu cầu, nhiệm vụ của đơn vị"
    ],
    "answer": 0
  },
  {
    "question": "Câu 15: Theo Nghị quyết Đại hội Đảng bộ Sư đoàn lần thứ XIII, nhiệm kỳ 2025-2030 trong công tác kiểm tra, giám sát của Đảng, đối tượng nào được chú trọng kiểm tra, giám sát việc thực hiện chức trách, nhiệm vụ?",
    "options": [
      "A. Tất cả đảng viên mới kết nạp",
      "B. Người đứng đầu cấp ủy, tổ chức đảng",
      "C. Cán bộ đã nghỉ hưu",
      "D. Nhân viên chuyên môn kỹ thuật"
    ],
    "answer": 1
  },
  {
    "question": "Câu 16: Theo Nghị quyết Đại hội Đảng bộ Sư đoàn lần thứ XIII, nhiệm kỳ 2025-2030, một trong các giải pháp bảo đảm Hậu cần - Kỹ thuật là tự túc bao nhiêu % thịt, cá?",
    "options": [
      "A. 50%",
      "B. 60%",
      "C. 70%",
      "D. 80%"
    ],
    "answer": 1
  },
  {
    "question": "Câu 17: Theo Nghị quyết Đại hội Đảng bộ Sư đoàn lần thứ XIII, nhiệm kỳ 2025-2030, Khâu đột phá thứ 2 trong nhiệm kỳ 2025 – 2030 là gì?",
    "options": [
      "A. Xây dựng chính quy, chấp hành kỷ luật",
      "B. Đẩy mạnh ứng dụng khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số trong thực hiện các nhiệm vụ",
      "C. Nâng cao chất lượng huấn luyện",
      "D. Đẩy mạnh công tác tăng gia sản xuất"
    ],
    "answer": 1
  },
  {
    "question": "Câu 18: Theo Nghị quyết Đại hội Đảng bộ Sư đoàn lần thứ XIII, nhiệm kỳ 2025-2030, Chỉ tiêu xây dựng mô hình về giáo dục chính trị, quản lý tư tưởng trong nhiệm kỳ 2025 – 2030 là bao nhiêu?",
    "options": [
      "A. 01 mô hình",
      "B. 01 - 02 mô hình",
      "C. 03 mô hình",
      "D. 05 mô hình"
    ],
    "answer": 1
  },
  {
    "question": "Câu 19: Theo Nghị quyết Đại hội Đảng bộ Sư đoàn lần thứ XIII, nhiệm kỳ 2025-2030, trong giải pháp xây dựng Đảng, nhiệm vụ ngăn chặn biểu hiện nào được nhấn mạnh?",
    "options": [
      "A. Biểu hiện ngại khó, ngại khổ",
      "B. Biểu hiện suy thoái về chính trị, tư tưởng, đạo đức, \"tự diễn biến\", \"tự chuyển hóa\"",
      "C. Biểu hiện mất đoàn kết nội bộ đơn thuần",
      "D. Biểu hiện làm việc qua sơ"
    ],
    "answer": 1
  },
  {
    "question": "Câu 20: Theo Nghị quyết Đại hội Đảng bộ Sư đoàn lần thứ XIII, nhiệm kỳ 2025-2030, về công tác An toàn giao thông, chỉ tiêu phương hướng nhiệm kỳ 2025 – 2030 đề ra là gì?",
    "options": [
      "A. Giảm 50% số vụ mất an toàn giao thông",
      "B. Khống chế vụ việc mất an toàn giao thông dưới 0,1%",
      "C. Không có trường hợp mất an toàn giao thông",
      "D. Xử lý các trường hợp vi phạm Luật Giao thông đường bộ."
    ],
    "answer": 2
  },
  {
    "question": "Câu 1. Khái quát truyền thống của Quân đội nhân dân Việt Nam là gì?",
    "options": [
      "A. Trung với Đảng, hiếu với dân, sẵn sàng chiến đấu, hy sinh, vì độc lập tự do của Tổ quốc, vì chủ nghĩa xã hội. Nhiệm vụ nào cũng hoàn thành, khó khăn nào cũng vượt qua, kẻ thù nào cũng đánh thắng.",
      "B. Dựa vào dân, phát huy sức mạnh toàn dân.",
      "C. Lấy tuyên truyền, giáo dục, vận động, thuyết phục là chính.",
      "D. Tổ chức lực lượng rộng khắp, mạng lưới liên hoàn, khép kín."
    ],
    "answer": 0
  },
  {
    "question": "Câu 2. Chủ đề phong trào thi đua Quyết thắng năm 2026?",
    "options": [
      "A. Đoàn kết, sáng tạo, kỷ cương, nêu gương, quyết thắng.",
      "B. Đoàn kết, dân chủ, nêu gương, kỷ cương, quyết thắng.",
      "C. Đoàn kết, kỷ cương, đột phá, sáng tạo, quyết thắng.",
      "D. Dân chủ, đoàn kết, mẫu mực, kỷ cương, quyết thắng."
    ],
    "answer": 2
  },
  {
    "question": "Câu 3. Bảo vệ vững chắc Tổ quốc Việt Nam xã hội chủ nghĩa từ sớm, từ xa, trên tất cả các yếu tố cấu thành Tổ quốc gồm?",
    "options": [
      "A. Đất liền, biển đảo, trên không, vũ trụ, biên giới và không gian mạng.",
      "B. Đất liền, biển đảo, vũ trụ và không gian mạng.",
      "C. Đất liền, biển đảo, trên không, vũ trụ và không gian mạng.",
      "D. Đất liền, biển đảo, trên không, vũ trụ."
    ],
    "answer": 2
  },
  {
    "question": "Câu 4. Trong quan hệ đối tác xếp theo cấp độ từ thấp đến cao là?",
    "options": [
      "A. Đối tác chiến lược toàn diện; đối tác toàn diện; đối tác chiến lược.",
      "B. Đối tác toàn diện; đối tác chiến lược; đối tác chiến lược toàn diện.",
      "C. Đối tác chiến lược; đối tác toàn diện; đối tác chiến lược toàn diện.",
      "D. Đối tác chiến lược toàn diện; đối tác chiến lược; đối tác toàn diện."
    ],
    "answer": 1
  },
  {
    "question": "Câu 5. Theo Nghị quyết số 847-NQ/QUTW ngày 28/12/2021 của Quân ủy Trung ương giải pháp quan trọng hàng đầu để giữ vững và phát huy phẩm chất “Bộ đội Cụ Hồ”; kiên quyết chống chủ nghĩa cá nhân trong tình hình mới?",
    "options": [
      "A. Coi trọng xây dựng các cấp ủy, tổ chức đảng trong sạch, vững mạnh tiêu biểu, đề cao vai trò, trách nhiệm trong lãnh đạo phát huy phẩm chất “Bộ đội Cụ Hồ”, kiên quyết chống chủ nghĩa cá nhân.",
      "B. Xây dựng đội ngũ cán bộ các cấp có đủ phẩm chất, năng lực, uy tín thực sự là tấm gương mẫu mực trong phát huy phẩm chất “Bộ đội Cụ Hồ”.",
      "C. Nâng cao hiệu lực, hiệu quả công tác kiểm tra, giám sát; kiên quyết chấn chỉnh, xử lý nghiêm các vi phạm.",
      "D. Tăng cường công tác lãnh đạo tư tưởng, giáo dục chính trị, nâng cao nhận thức, trách nhiệm cho cán bộ, đảng viên và quần chúng tiếp tục phát huy phẩm chất “Bộ đội Cụ Hồ”, kiên quyết chống chủ nghĩa cá nhân."
    ],
    "answer": 3
  },
  {
    "question": "Câu 6. Theo Quy định số 144-QĐ/TW, ngày 09/5/2024 của Bộ Chính trị, đâu là chuẩn mực đạo đức cách mạng của cán bộ, đảng viên?",
    "options": [
      "A. Liên hệ chặt chẽ với Nhân dân, lắng nghe ý kiến và chịu sự giám sát của Nhân dân.",
      "B. Tôn trọng Nhân dân, tận tụy phục vụ Nhân dân.",
      "C. Trung thành với Đảng Cộng sản Việt Nam, bảo vệ danh dự Tổ quốc và lợi ích quốc gia.",
      "D. Gương mẫu, khiêm tốn, tu dưỡng rèn luyện, học tập suốt đời."
    ],
    "answer": 3
  },
  {
    "question": "Câu 7. Đấu tranh trên không gian mạng trong Quân đội nhân dân Việt Nam là nhiệm vụ của ai?",
    "options": [
      "A. Là nhiệm vụ của cấp ủy, chỉ huy các cấp.",
      "B. Là nhiệm vụ của cán bộ chính trị các cấp.",
      "C. Là nhiệm vụ của cấp ủy, chỉ huy và của mọi tổ chức, mọi lực lượng trong toàn quân.",
      "D. Là nhiệm vụ của cơ quan chính trị các cấp."
    ],
    "answer": 2
  },
  {
    "question": "Câu 8. Quy định số 85-QĐ/TW ngày 07/10/2022 của Ban Bí thư về việc cán bộ, đảng viên thiết lập và sử dụng trang thông tin điện tử cá nhân trên Internet áp dụng đối tượng nào?",
    "options": [
      "A. Áp dụng đối với cán bộ, đảng viên, nhất là cán bộ lãnh đạo, quản lý, người đứng đầu cấp ủy, tổ chức đảng.",
      "B. Áp dụng đối với các cấp ủy, tổ chức đảng, cán bộ, đảng viên.",
      "C. Áp dụng đối với cán bộ, đảng viên khi tham gia mạng xã hội.",
      "A. Áp dụng với cấp ủy, tổ chức đảng."
    ],
    "answer": 1
  },
  {
    "question": "Câu 9. Đâu là trách nhiệm của cán bộ, đảng viên trong việc thiết lập và sử dụng trang thông tin điện tử cá nhân trên Internet, mạng xã hội theo Quy định số 85-QĐ/TW ngày 07/10/2022 của Ban Bí thư?",
    "options": [
      "A. Khai báo thông tin chính danh;",
      "B. Đăng ký ít nhất 01 tài khoản mạng xã hội;",
      "C. Sẵn sàng tham gia đấu tranh trên không gian mạng khi có chỉ đạo;",
      "D. Quản lý chặt chẽ trang thông tin điện tử cá nhân của mình;"
    ],
    "answer": 0
  },
  {
    "question": "Câu 10. “Chiến dịch 500 ngày đêm đẩy mạnh thực hiện tìm kiếm, quy tập và xác định danh tính hài cốt liệt sĩ” đặt mục tiêu tìm kiếm, quy tập khoảng bao nhiêu hài cốt liệt sĩ?",
    "options": [
      "A. 5.000 hài cốt",
      "B. 7.000 hài cốt",
      "C. 10.000 hài cốt",
      "D. 18.000 hài cốt"
    ],
    "answer": 1
  },
  {
    "question": "Câu 11. “Chiến dịch 500 ngày đêm đẩy mạnh thực hiện tìm kiếm, quy tập và xác định danh tính hài cốt liệt sĩ” đặt mục tiêu giám định ADN khoảng bao nhiêu mẫu hài cốt liệt sĩ?",
    "options": [
      "A. 7.000 mẫu",
      "B. 10.000 mẫu",
      "C. 15.000 mẫu",
      "D. 18.000 mẫu"
    ],
    "answer": 3
  },
  {
    "question": "Câu 12. Lễ phát động \"Chiến dịch 500 ngày đêm...\" được tổ chức vào thời gian và địa điểm nào?",
    "options": [
      "A. Sáng ngày 15/3/2026 tại Hà Nội",
      "B. Sáng ngày 02/4/2026 tại Thành cổ Quảng Trị, tỉnh Quảng Trị",
      "C. Sáng ngày 27/7/2026 tại Nghĩa trang Liệt sĩ Quốc gia Trường Sơn",
      "D. Sáng ngày 20/11/2026 tại tỉnh Tuyên Quang"
    ],
    "answer": 1
  },
  {
    "question": "Câu 13. Chiến dịch tập trung đẩy mạnh công tác rà phá bom mìn, vật liệu nổ phục vụ tìm kiếm, quy tập tại các địa bàn trọng điểm nào?",
    "options": [
      "A. Quảng Bình, Quảng Trị, Thừa Thiên Huế",
      "B. Tuyên Quang (Vị Xuyên), tỉnh Lào Cai, tỉnh Lạng Sơn",
      "C. Kon Tum, Gia Lai, Đắk Lắk",
      "D. Điện Biên, Sơn La, Lai Châu"
    ],
    "answer": 1
  },
  {
    "question": "Câu 14. Thời gian thực hiện tổng thể của \"Chiến dịch 500 ngày đêm...\" là từ ngày nào đến ngày nào?",
    "options": [
      "A. Từ ngày 01/01/2026 đến ngày 27/7/2027",
      "B. Từ ngày 15/3/2026 đến ngày 27/7/2027",
      "C. Từ ngày 02/4/2026 đến ngày 31/12/2027",
      "D. Từ ngày 22/3/2026 đến ngày 27/7/2027"
    ],
    "answer": 1
  },
  {
    "question": "Câu 1. Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “2 kiên định” gồm những nội dung nào?",
    "options": [
      "A. Kiên định mục tiêu, lý tưởng chiến đấu của Quân đội; kiên định xây dựng lực lượng dân quân tự vệ, dự bị động viên vững mạnh.",
      "B. Kiên định đường lối quân sự, quốc phòng của Đảng; kiên định xây dựng Quân đội vững mạnh về chính trị.",
      "C. Kiên định quốc phòng toàn dân, chiến tranh nhân dân; kiên định hội nhập, đối ngoại quốc phòng.",
      "D. Kiên định hiện đại hóa Quân đội; kiên định công nghiệp quốc phòng tự chủ."
    ],
    "answer": 1
  },
  {
    "question": "Câu 2. Nội hàm “kiên định đường lối quân sự, quốc phòng của Đảng” trong chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội là gì?",
    "options": [
      "A. Tập trung hiện đại hóa Quân đội, xây dựng một số lực lượng hiện đại.",
      "B. Tăng cường hợp tác quốc phòng, mua sắm vũ khí, trang bị.",
      "C. Quán triệt và thực hiện đúng quan điểm, đường lối, chính sách của Đảng, Nhà nước về quân sự, quốc phòng.",
      "D. Phát triển lực lượng thường trực, xây dựng dân quân tự vệ, dự bị động viên “vững mạnh, rộng khắp”, sẵn sàng chiến đấu cao."
    ],
    "answer": 2
  },
  {
    "question": "Câu 3. Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “2 kiên định”, khi thực hiện “kiên định đường lối quân sự, quốc phòng của Đảng” cần quán triệt nội dung nào?",
    "options": [
      "A. Quốc phòng toàn dân, chiến tranh nhân dân và chính sách “bốn không”.",
      "B. Phát triển kinh tế gắn với quốc phòng, bảo vệ biên cương của Tổ quốc.",
      "C. Mở rộng hợp tác quân sự, mua sắm vũ khí trang bị cho Quân đội.",
      "D. Tăng cường lực lượng dự bị, sẵn sàng bổ sung lực lượng khi có tình huống."
    ],
    "answer": 0
  },
  {
    "question": "Câu 4. Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “2 kiên định”, phương châm nào là nền tảng quan trọng trong thực hiện “kiên định đường lối quân sự, quốc phòng của Đảng”?",
    "options": [
      "A. Dựa vào tiềm lực kinh tế, đầu tư mạnh hơn cho Quân đội",
      "B. Dựa vào sức mạnh quốc tế, trên tinh thần đoàn kết, hòa bình trên thế giới",
      "C. Dựa vào khoa học, công nghệ, xây dựng nền quốc phòng vững mạnh",
      "D. Dựa vào dân, lấy dân làm gốc và phát huy sức mạnh của Nhân dân"
    ],
    "answer": 3
  },
  {
    "question": "Câu 5. Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “2 kiên định”, trong đó “Kiên định xây dựng Quân đội vững mạnh về chính trị” trước hết nhằm?",
    "options": [
      "A. Nâng cao chất lượng huấn luyện, khả năng sẵn sàng chiến đấu.",
      "B. Tăng cường sự lãnh đạo của Đảng đối với Quân đội.",
      "C. Đẩy mạnh hội nhập quốc tế, đối ngoại quốc phòng.",
      "D. Hiện đại hóa vũ khí, trang bị, nâng cao khả năng sẵn sàng chiến đấu."
    ],
    "answer": 1
  },
  {
    "question": "Câu 6. Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “2 kiên định”, trong đó một nội dung quan trọng của kiên định xây dựng Quân đội vững mạnh về chính trị là gì?",
    "options": [
      "A. Bản lĩnh chính trị kiên định, vững vàng, giỏi chuyên môn quân sự.",
      "B. Bản lĩnh chính trị kiên định, vững vàng, giỏi chuyên môn quân sự, thành thạo công nghệ số trong thời kỳ mới.",
      "C. Kiên định Chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh, quan điểm, đường lối quân sự của Đảng, mục tiêu độc lập dân tộc và chủ nghĩa xã hội.",
      "D. Kiên định mục tiêu độc lập, có khả năng đối ngoại."
    ],
    "answer": 2
  },
  {
    "question": "Câu 7. Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về phương châm “5 vững”, cụm từ “không ngừng phát huy giá trị văn hóa “Bộ đội Cụ Hồ” thời kỳ mới” phản ánh nội dung nào?",
    "options": [
      "A. Chính trị vững.",
      "B. Kỷ luật vững.",
      "C. Công nghệ vững.",
      "D. Nghệ thuật quân sự vững."
    ],
    "answer": 0
  },
  {
    "question": "Câu 8. Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “2 đẩy mạnh” gồm:",
    "options": [
      "A. Đẩy mạnh huấn luyện, xây dựng chính quy; đẩy mạnh phát huy giá trị văn hóa “Bộ đội Cụ Hồ”.",
      "B. Đẩy mạnh huấn luyện, xây dựng chính quy; đẩy mạnh chuyển đổi số và phát triển công nghiệp quốc phòng.",
      "C. Đẩy mạnh xây dựng Quân đội cách mạng, chính quy, tinh nhuệ, hiện đại; đẩy mạnh hội nhập quốc tế và đối ngoại quốc phòng.",
      "D. Đẩy mạnh xây dựng quân đội vững mạnh về chính trị, quân sự; đẩy mạnh bảo đảm tốt hậu cần và kỹ thuật."
    ],
    "answer": 2
  },
  {
    "question": "Câu 9. Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “Đẩy mạnh xây dựng Quân đội nhân dân cách mạng, chính quy, tinh nhuệ, hiện đại”, từ “Hiện đại” được hiểu như thế nào?",
    "options": [
      "A. Hiện đại về vũ khí, trang bị, kỹ thuật.",
      "B. Hiện đại hơn chính mình trước đây, nhất là về nghệ thuật quân sự.",
      "C. Hiện đại theo điều kiện từng đơn vị, một số binh chủng tiến thẳng lên hiện đại.",
      "D. Đặt trong tương quan với trình độ quân sự của khu vực và thế giới."
    ],
    "answer": 3
  },
  {
    "question": "Câu 10. Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “Đẩy mạnh xây dựng Quân đội nhân dân cách mạng, chính quy, tinh nhuệ, hiện đại”, nhân tố tiên quyết là gì?",
    "options": [
      "A. Đẩy mạnh xây dựng con người hiện đại trong Quân đội.",
      "B. Tăng cường mua sắm vũ khí, trang bị của các nước tiên tiến.",
      "C. Tăng thời gian huấn luyện, nâng cao khả năng sẵn sàng chiến đấu.",
      "D. Mở rộng hợp tác quân sự, xây dựng các lực lượng tiên tiến, hiện đại."
    ],
    "answer": 0
  },
  {
    "question": "Câu 11. Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “Đẩy mạnh xây dựng Quân đội nhân dân cách mạng, chính quy, tinh nhuệ, hiện đại”, giải pháp căn cơ để xây dựng Quân đội hiện đại là gì?",
    "options": [
      "A. Tăng cường mua sắm vũ khí, trang bị của các nước tiên tiến.",
      "B. Tăng thời gian huấn luyện, nâng cao khả năng sẵn sàng chiến đấu.",
      "C. Đẩy mạnh xây dựng công nghiệp quốc phòng tự chủ, tự lực, tự cường, lưỡng dụng, hiện đại.",
      "D. Mở rộng hợp tác quân sự, xây dựng các lực lượng tiên tiến, hiện đại."
    ],
    "answer": 2
  },
  {
    "question": "Câu 12. Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “2 đẩy mạnh”, trong đó “Đẩy mạnh hội nhập quốc tế và đối ngoại quốc phòng” nhằm?",
    "options": [
      "A. Mở rộng quan hệ quân sự, sẵn sàng tham gia lực lượng gìn giữ hòa bình của Liên hiệp quốc.",
      "B. Giữ vững môi trường hòa bình, ổn định và bảo vệ Tổ quốc từ sớm, từ xa.",
      "C. Tăng xuất khẩu quốc phòng, bảo đảm thu ngân sách cho Quân đội.",
      "D. Mở rộng hoạt động đa phương hóa, đa dạng hóa trong đối ngoại quốc phòng."
    ],
    "answer": 1
  },
  {
    "question": "Câu 13. Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “2 ngăn ngừa” gồm:",
    "options": [
      "A. Ngăn ngừa chiến tranh; ngăn ngừa vi phạm pháp luật, kỷ luật, mất an toàn.",
      "B. Ngăn ngừa thiên tai, dịch bệnh; ngăn ngừa chiến tranh.",
      "C. Ngăn ngừa các nguy cơ chiến tranh, xung đột; ngăn ngừa suy thoái, “tự diễn biến”, “tự chuyển hóa”.",
      "D. Ngăn ngừa vi phạm pháp luật, kỷ luật, mất an toàn; ngăn ngừa tham nhũng, lãng phí, tiêu cực."
    ],
    "answer": 2
  },
  {
    "question": "Câu 14. Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “2 ngăn ngừa”, trong đó “Ngăn ngừa mọi biểu hiện suy thoái về tưtưởng chính trị, đạo đức, lối sống, “tự điễn biển”, “tự chuyễn hóa”...” cần thực hiện theo tinh thần nào?",
    "options": [
      "A. Xử lý ngay khi có vi phạm.",
      "B. Chờ dấu hiệu rõ mới kiểm tra, xử lý.",
      "C. Tăng cường kiểm tra, nhất là khi có dấu hiệu vi phạm.",
      "D. Ngăn ngừa từ sớm, từ khi còn là mầm mống."
    ],
    "answer": 3
  },
  {
    "question": "Câu 15. Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “5 vững” gồm những gì?",
    "options": [
      "A. Chính trị, tư tưởng, kỷ luật, công nghệ, đời sống bộ đội.",
      "B. Chính trị, kỷ luật, công nghệ, nghệ thuật quân sự, đời sống bộ đội.",
      "C. Chính trị, quân sự, hậu cần, kỹ thuật, đời sống.",
      "D. Chính trị, tổ chức, cán bộ, công nghệ, đời sống."
    ],
    "answer": 1
  },
  {
    "question": "Câu 16. Theo tinh thần chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “5 vững” được xác định là gì?",
    "options": [
      "A. Khẩu hiệu tuyên truyền rộng rãi trong toàn quân.",
      "B. Nội dung học tập thường xuyên, liên tục.",
      "C. Tiêu chí rèn luyện và thước đo kết quả.",
      "D. Nội dung sinh hoạt định kỳ."
    ],
    "answer": 2
  },
  {
    "question": "Câu 17. Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “5 vững”, trong đó “Chính trị vững” thể hiện rõ nhất ở yêu cầu nào?",
    "options": [
      "A. Có trình độ lý luận cao, đáp ứng yêu cầu nhiệm vụ trong tình hình mới.",
      "B. Bản lĩnh chính trị kiên định, vững vàng; giỏi chuyên môn quân sự.",
      "C. Tuyệt đối trung thành với Tổ quốc, Đảng, Nhà nước và Nhân dân; vững vàng về mục tiêu, lý tưởng.",
      "D. Có tinh thần cảnh giác cách mạng cao, kỷ luật nghiêm minh."
    ],
    "answer": 2
  },
  {
    "question": "Câu 18. Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “5 vững”, nội dung nào không thuộc “Kỷ luật vững”?",
    "options": [
      "A. Chấp hành điều lệnh, điều lệ.",
      "B. Quản lý chặt chẽ quân nhân, vũ khí.",
      "C. Không vi phạm pháp luật, kỷ luật.",
      "D. Làm chủ nền tảng số và trí tuệ nhân tạo."
    ],
    "answer": 3
  },
  {
    "question": "Câu 19. Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “5 vững”, trong đó “Công nghệ vững” nhấn mạnh yêu cầu:",
    "options": [
      "A. Sử dụng tốt máy tính, trang thiết bị kỹ thuật thông minh.",
      "B. Thành thạo điện thoại thông minh, các thiết bị điện tử trong Quân đội.",
      "C. Làm chủ công nghệ quân sự, khai thác tốt trang bị hiện đại và hình thành “chiến sĩ số”.",
      "D. Xây dựng cơ sở dữ liệu, đưa quân đội nhanh chóng hội nhập quốc tế."
    ],
    "answer": 2
  },
  {
    "question": "Câu 20. Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “5 vững”, trong đó “Nghệ thuật quân sự vững” đòi hỏi?",
    "options": [
      "A. Nắm chắc kinh nghiệm chiến đấu, nhất là trong các cuộc kháng chiến chống Pháp, Mỹ.",
      "B. Giỏi sử dụng vũ khí, tinh thông binh pháp.",
      "C. Giỏi huấn luyện, vận dụng nghệ thuật quân sự trong điều kiện mới.",
      "D. Nắm vững đường lối quân sự, nghệ thuật đánh giặc và vận dụng sáng tạo trong điều kiện mới."
    ],
    "answer": 3
  },
  {
    "question": "Câu 1. Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến chủ trương, quy định của Đảng và pháp luật Nhà nước?",
    "options": [
      "A. Thực hiện đầy đủ các quy định",
      "B. Nghiên cứu, học tập, thực hiện các quy định",
      "C. Nói, viết, làm trái hoặc không thực hiện",
      "D. Phổ biến quy định cho người khác"
    ],
    "answer": 2
  },
  {
    "question": "Câu 2. Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến nguyên tắc tổ chức và hoạt động của Đảng?",
    "options": [
      "A. Không chấp hành hoặc chấp hành không đúng, không đầy đủ",
      "B. Tham gia đóng góp ý kiến",
      "C. Thực hiện nghiêm túc nguyên tắc",
      "D. Báo cáo vi phạm nguyên tắc"
    ],
    "answer": 0
  },
  {
    "question": "Câu 3. Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến chủ nghĩa Mác-Lênin và tư tưởng Hồ Chí Minh?",
    "options": [
      "A. Học tập và làm theo",
      "B. Nghiên cứu, vận dụng sáng tạo",
      "C. Tuyên truyền, phổ biến rộng rãi",
      "D. Phản bác, phủ định, xuyên tạc"
    ],
    "answer": 3
  },
  {
    "question": "Câu 4. Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến thông tin, tài liệu bí mật của Đảng và Nhà nước?",
    "options": [
      "A. Bảo vệ thông tin bí mật",
      "B. Lưu trữ an toàn tài liệu, không để lộ bí mật của Đảng, Nhà nước",
      "C. Cung cấp, làm lộ, làm mất hoặc viết bài, đăng thông tin",
      "D. Báo cáo khi phát hiện rò rỉ thông tin"
    ],
    "answer": 2
  },
  {
    "question": "Câu 5. Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, điểm mới nào sau đây được bổ sung liên quan đến việc phát tán thông tin sai sự thật?",
    "options": [
      "A. Sử dụng hạ tầng Internet, mạng xã hội, nền tảng số, trí tuệ nhân tạo",
      "B. Kiểm chứng thông tin trước khi đăng",
      "C. Rút kinh nghiệm khi có sai sót",
      "D. Chỉnh sửa thông tin cho chính xác"
    ],
    "answer": 0
  },
  {
    "question": "Câu 6. Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến đơn tố cáo?",
    "options": [
      "A. Gửi đơn đến nơi có thẩm quyền, thường xuyên theo dõi kết quả",
      "B. Tố cáo có nội dung mang tính bịa đặt; viết đơn tố cáo giấu tên, mạo tên",
      "C. Tố cáo có căn cứ, trung thực",
      "D. Theo dõi kết quả giải quyết tố cáo"
    ],
    "answer": 1
  },
  {
    "question": "Câu 7. Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến hoạt động bè phái?",
    "options": [
      "A. Tham gia sinh hoạt Đảng đầy đủ, tích cực trong các hoạt động của cơ quan, đơn vị, địa phương",
      "B. Tổ chức, xúi giục, tham gia các hoạt động bè phái, cục bộ gây mất đoàn kết nội bộ",
      "C. Thường xuyên tham gia sinh hoạt, góp ý xây dựng tổ chức",
      "D. Báo cáo vi phạm nguyên tắc"
    ],
    "answer": 1
  },
  {
    "question": "Câu 8. Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến các tổ chức trái quy định?",
    "options": [
      "A. Tham gia tổ chức do Đảng, Nhà nước thành lập",
      "B. Tổ chức, tham gia, tài trợ, giúp tổ chức, hội trái quy định của Đảng, pháp luật Nhà nước",
      "C. Ủng hộ hoạt động thiện nguyện",
      "D. Tham gia các hội nghề nghiệp hợp pháp"
    ],
    "answer": 1
  },
  {
    "question": "Câu 9. Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến báo cáo, kê khai?",
    "options": [
      "A. Kê khai đầy đủ theo quy định",
      "B. Báo cáo trung thực với tổ chức",
      "C. Báo cáo, lập hồ sơ, kê khai lý lịch, kê khai tài sản, thu nhập không trung thực",
      "D. Giải trình nguồn gốc tài sản khi được yêu cầu"
    ],
    "answer": 2
  },
  {
    "question": "Câu 10. Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, điểm mới nào sau đây được bổ sung về việc sử dụng văn bằng, chứng chỉ?",
    "options": [
      "A. Sử dụng văn bằng, chứng chỉ, chứng nhận không hợp pháp",
      "B. Học tập nâng cao trình độ đáp ứng yêu cầu nhiệm vụ được giao",
      "C. Công nhận văn bằng nước ngoài",
      "D. Xác minh văn bằng theo quy định"
    ],
    "answer": 0
  },
  {
    "question": "Câu 11. Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến đạo đức công vụ?",
    "options": [
      "A. Thực hiện đúng đạo đức công vụ",
      "B. Vi phạm đạo đức công vụ, đạo đức nghề nghiệp; vi phạm quy tắc ứng xử của người có chức vụ, quyền hạn",
      "C. Rèn luyện đạo đức cách mạng, gương mẫu trong lời nói và việc làm",
      "D. Gương mẫu trong công tác, xây dựng cơ quan, đơn vị vững mạnh"
    ],
    "answer": 1
  },
  {
    "question": "Câu 12. Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến chạy chức, chạy quyền?",
    "options": [
      "A. Phấn đấu theo năng lực, uy tín",
      "B. Có hành vi chạy chức, chạy quyền, bao che, tiếp tay, can thiệp, tác động để bản thân hoặc người khác được tiếp nhận, tuyển dụng, bổ nhiệm",
      "C. Chấp hành quyết định điều động, sẵn sàng nhận và hoàn thành các nhiệm vụ được giao",
      "D. Chấp hành quyết định điều động; báo cáo trung thực lý lịch"
    ],
    "answer": 1
  },
  {
    "question": "Câu 13. Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến tham ô, hối lộ?",
    "options": [
      "A. Từ chối nhận quà biếu vượt quy định",
      "B. Tham ô, đưa, nhận, môi giới hối lộ hoặc lợi dụng vị trí công tác để môi giới, hối lộ dưới mọi hình thức",
      "C. Báo cáo hành vi tham nhũng cho cơ quan chức năng",
      "D. Thực hiện quy định về phòng, chống tham nhũng, lãng phí, tiêu cực"
    ],
    "answer": 1
  },
  {
    "question": "Câu 14. Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến việc tặng, nhận quà?",
    "options": [
      "A. Nhận quà theo quy định, không làm ảnh hưởng đến tổ chức",
      "B. Từ chối quà biếu không đúng quy định",
      "C. Tặng, nhận quà dưới mọi hình thức để tác động đến tổ chức, người có trách nhiệm dẫn đến việc quyết định sai, có lợi ích riêng",
      "D. Báo cáo việc nhận quà vượt quy định"
    ],
    "answer": 2
  },
  {
    "question": "Câu 15. Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến thực hành tiết kiệm?",
    "options": [
      "A. Thực hành tiết kiệm trong công tác; không để xảy ra thất thoát, lãng phí trong việc quản lý, khai thác, sử dụng các nguồn lực",
      "B. Không thực hành tiết kiệm; để xảy ra thất thoát, lãng phí trong việc quản lý, khai thác, sử dụng các nguồn lực",
      "C. Chống lãng phí, tham nhũng",
      "D. Sử dụng hiệu quả tài sản công"
    ],
    "answer": 1
  },
  {
    "question": "Câu 1. Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, hệ thống tổ chức của Đảng hiện nay được thống nhất theo mô hình mấy cấp?",
    "options": [
      "A. 6 cấp",
      "B. 5 cấp",
      "C. 3 cấp",
      "D. 4 cấp"
    ],
    "answer": 2
  },
  {
    "question": "Câu 2. Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, điểm mới trong thí điểm tổ chức cơ sở đảng được xác định là gì?",
    "options": [
      "A. Đảng bộ trực thuộc cơ sở",
      "B. Gồm đảng bộ trực thuộc cơ sở và chi bộ",
      "C. Gồm chi bộ cơ sở, đảng bộ bộ phận",
      "D. Đảng bộ ngành, lĩnh vực"
    ],
    "answer": 1
  },
  {
    "question": "Câu 3. Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, tên gọi chung được thống nhất sử dụng cho các loại hình chi bộ (không còn phân biệt chi bộ cơ sở hay chi bộ trực thuộc) là gì?",
    "options": [
      "A. Chi bộ",
      "B. Chi bộ cơ sở",
      "C. Chi bộ trực thuộc",
      "D. Tổ đảng"
    ],
    "answer": 0
  },
  {
    "question": "Câu 4. Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, thẩm quyền quyết định thành lập tổ chức đảng ở xã, phường, đặc khu là đảng bộ cơ sở trực thuộc cấp ủy cấp nào?",
    "options": [
      "A. Cấp cơ sở",
      "B. Cấp tỉnh",
      "C. Cấp trung ương",
      "D. Cấp xã"
    ],
    "answer": 1
  },
  {
    "question": "Câu 5. Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, nội dung nào sau đây là điểm mới được thí điểm thành lập ở cấp tỉnh, thành phố?",
    "options": [
      "A. Đảng bộ các sở, ban, ngành, doanh nghiệp nhà nước",
      "B. Đảng bộ hội đồng nhân dân, Mặt trận Tổ quốc và các đoàn thể",
      "C. Đảng bộ các doanh nghiệp nhà nước, doanh nghiệp có vốn đầu tư nước ngoài",
      "D. Đảng bộ các trường đại học, cao đẳng, cơ sở giáo dục đào tạo"
    ],
    "answer": 1
  },
  {
    "question": "Câu 6. Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, việc thành lập các cơ quan tham mưu, giúp việc chuyên trách (hoặc kiêm nhiệm) của đảng ủy cơ sở và đảng ủy trực thuộc cơ sở do cấp nào xem xét, quyết định?",
    "options": [
      "A. Ban Tổ chức Trung ương",
      "B. Cấp ủy cấp tỉnh",
      "C. Đảng ủy cấp trên trực tiếp",
      "D. Ban Bí thư"
    ],
    "answer": 1
  },
  {
    "question": "Câu 7. Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, độ tuổi quy định của người vào Đảng tại thời điểm chi bộ xét kết nạp là bao nhiêu?",
    "options": [
      "A. Từ đủ 18 tuổi đến đủ 60 tuổi",
      "B. Từ đủ 18 tuổi đến đủ 65 tuổi",
      "C. Từ đủ 20 tuổi đến đủ 60 tuổi",
      "D. Từ đủ 18 tuổi đến hết 55 tuổi"
    ],
    "answer": 0
  },
  {
    "question": "Câu 8. Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, trình độ học vấn tối thiểu của người vào Đảng theo quy định chung là gì?",
    "options": [
      "A. Tốt nghiệp tiểu học trở lên",
      "B. Hoàn thành chương trình giáo dục bậc trung học cơ sở trở lên",
      "C. Tốt nghiệp trung học phổ thông",
      "D. Có bằng cao đẳng, đại học"
    ],
    "answer": 1
  },
  {
    "question": "Câu 9. Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, trong thời hạn bao lâu kể từ ngày cấp ủy có thẩm quyền ban hành quyết định kết nạp, chi bộ phải tổ chức lễ kết nạp cho đảng viên?",
    "options": [
      "A. 15 ngày làm việc",
      "B. 30 ngày làm việc",
      "C. 45 ngày làm việc",
      "D. 60 ngày làm việc"
    ],
    "answer": 1
  },
  {
    "question": "Câu 10. Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, nếu chi bộ họp chậm và cấp ủy chuẩn y chậm, đảng viên dự bị đủ điều kiện vẫn được công nhận chính thức đúng vào thời điểm nào?",
    "options": [
      "A. Ngày cấp ủy ban hành quyết định",
      "B. Ngày hết 12 tháng dự bị",
      "C. Ngày chi bộ họp xét",
      "D. Ngày làm thủ tục chuyển sinh hoạt"
    ],
    "answer": 1
  },
  {
    "question": "Câu 11. Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, thẩm quyền quyết định kết nạp đảng viên đối với đảng ủy cơ sở thuộc về ai?",
    "options": [
      "A. Tập thể đảng ủy cơ sở",
      "B. Ban thường vụ đảng ủy cơ sở",
      "C. Chi bộ cơ sở",
      "D. Cấp ủy cấp trên trực tiếp"
    ],
    "answer": 1
  },
  {
    "question": "Câu 12. Theo Quy định số 208-QĐ/TW về thi hành Điều lệ Đảng, tuổi Đảng của đảng viên được tính từ thời điểm nào?",
    "options": [
      "A. Ngày hết thời gian dự bị",
      "B. Ngày cấp có thẩm quyền ban hành quyết định kết nạp",
      "C. Ngày chi bộ tổ chức lễ kết nạp",
      "D. Ngày được công nhận đảng viên chính thức"
    ],
    "answer": 1
  },
  {
    "question": "Câu 13. Theo Quy định số 208-QĐ/TW về thi hành Điều lệ Đảng, thời hạn hoàn thành thủ tục chuyển sinh hoạt đảng chính thức khi đảng viên thay đổi nơi công tác hoặc cư trú là bao lâu?",
    "options": [
      "A. 30 ngày làm việc",
      "B. 45 ngày làm việc",
      "C. 60 ngày làm việc",
      "D. 90 ngày làm việc"
    ],
    "answer": 2
  },
  {
    "question": "Câu 14. Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, thời gian tối thiểu kể từ khi ra khỏi Đảng để được xem xét kết nạp lại là bao lâu?",
    "options": [
      "A. Ít nhất 12 tháng",
      "B. Ít nhất 24 tháng",
      "C. Ít nhất 36 tháng",
      "D. Ít nhất 48 tháng"
    ],
    "answer": 2
  },
  {
    "question": "Câu 15. Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, nghị quyết của các cơ quan lãnh đạo của Đảng chỉ có giá trị thi hành khi có bao nhiêu số thành viên trong cơ quan đó tán thành?",
    "options": [
      "A. Ít nhất hai phần ba",
      "B. Hơn một nửa",
      "C. Ít nhất ba phần tư",
      "D. Toàn thể thành viên"
    ],
    "answer": 1
  },
  {
    "question": "Câu 1. Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, tư duy quản trị xã hội cần chuyển dịch mạnh mẽ theo hướng nào?",
    "options": [
      "A. Từ \"quản lý xã hội\" sang \"quản trị và kiến tạo xã hội\".",
      "B. Từ \"kiến tạo xã hội\" sang \"quản lý xã hội chặt chẽ\".",
      "C. Từ \"phân cấp, phân quyền\" sang \"tập trung, tập quyền\".",
      "D. Từ \"dựa trên dữ liệu\" sang \"dựa trên kinh nghiệm chủ quan\"."
    ],
    "answer": 0
  },
  {
    "question": "Câu 2. Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, yếu tố nào được xác định là mục tiêu, yêu cầu xuyên suốt của quá trình phát triển, thể hiện bản chất tốt đẹp của chế độ xã hội chủ nghĩa?",
    "options": [
      "A. Tăng trưởng kinh tế.",
      "B. An ninh con người.",
      "C. Ổn định chính trị.",
      "D. Hội nhập quốc tế."
    ],
    "answer": 1
  },
  {
    "question": "Câu 3. Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, mục tiêu cụ thể đến năm 2030 về phòng, chống tội phạm và tệ nạn xã hội là gì?",
    "options": [
      "A. Phấn đấu hằng năm giảm 5% số vụ phạm tội và 100% địa bàn cấp tỉnh không có ma túy.",
      "B. Phấn đấu hằng năm giảm 10% số vụ phạm tội về trật tự xã hội; đến năm 2030 đạt ít nhất 50% số địa bàn cấp xã và 20% địa bàn cấp tỉnh không có ma túy.",
      "C. Loại bỏ hoàn toàn tội phạm công nghệ cao và tệ nạn ma túy trên toàn quốc vào năm 2030.",
      "D. Giữ vững tỷ lệ phạm tội hiện tại và tập trung xử lý nghiêm các vi phạm phát sinh."
    ],
    "answer": 1
  },
  {
    "question": "Câu 4. Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, Việt Nam phấn đấu thuộc nhóm bao nhiêu nước dẫn đầu thế giới về Chỉ số an ninh mạng toàn cầu (GCI) vào năm 2030?",
    "options": [
      "A. Tốp 10 nước.",
      "B. Tốp 15 nước.",
      "C. Tốp 20 nước.",
      "D. Tốp 30 nước."
    ],
    "answer": 1
  },
  {
    "question": "Câu 5. Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, chỉ số hài lòng của người dân đối với sự phục vụ của cơ quan hành chính nhà nước (SIPAS) phấn đấu đạt giá trị trung bình cả nước là bao nhiêu vào năm 2030?",
    "options": [
      "A. Trên 75%.",
      "B. Trên 80%.",
      "C. Trên 88%.",
      "D. Trên 95%."
    ],
    "answer": 2
  },
  {
    "question": "Câu 6. Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, tầm nhìn đến năm 2045, điều gì sẽ được hình thành vững chắc trong xã hội?",
    "options": [
      "A. \"Trật tự tự thân\" của xã hội.",
      "B. Hệ thống an sinh xã hội hoàn toàn do nhà nước bao cấp.",
      "C. Mô hình kinh tế tập trung quan liêu.",
      "D. Cơ chế kiểm soát xã hội bằng biện pháp hành chính thuần túy."
    ],
    "answer": 0
  },
  {
    "question": "Câu 7. Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, trong nền quản trị xã hội hiện đại, yếu tố nào được xác định là nguồn tài nguyên chiến lược, tư liệu sản xuất mới?",
    "options": [
      "A. Đất đai.",
      "B. Vốn đầu tư.",
      "C. Dữ liệu.",
      "D. Lao động phổ thông."
    ],
    "answer": 2
  },
  {
    "question": "Câu 8. Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, hệ thống y tế cần chuyển dịch căn bản theo hướng nào?",
    "options": [
      "A. Từ \"phòng bệnh\" sang tập trung \"chữa bệnh\".",
      "B. Từ \"chữa bệnh\" sang chủ động phòng bệnh, chăm sóc sức khỏe toàn diện và quản lý sức khỏe.",
      "C. Từ \"công lập\" sang hoàn toàn \"tư nhân hóa\".",
      "D. Từ \"chăm sóc sức khỏe ban đầu\" sang \"chuyên sâu\"."
    ],
    "answer": 1
  },
  {
    "question": "Câu 9. Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, tư duy về dân số cần chuyển căn bản từ quản lý quy mô, cơ cấu sang phát triển gì?",
    "options": [
      "A. Mật độ dân số đô thị.",
      "B. Vốn dân số quốc gia.",
      "C. Tỷ lệ sinh thay thế.",
      "D. Di cư lao động ra nước ngoài."
    ],
    "answer": 1
  },
  {
    "question": "Câu 10. Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, 3 nhóm nhiệm vụ, giải pháp đột phá được xác định là gì?",
    "options": [
      "A. (1) Phát triển kinh tế số; (2) Đẩy mạnh hội nhập quốc tế; (3) Cải cách hành chính.",
      "B. (1) Xây dựng văn hoá thượng tôn pháp luật, văn hoá Đảng, văn hoá công vụ và kỷ cương xã hội; (2) Xây dựng con người Việt Nam thời kỳ mới; (3) Xây dựng nền quản trị xã hội hiện đại, kiến tạo phát triển từ cơ sở.",
      "C. (1) Tăng cường quốc phòng, an ninh; (2) Phát triển nông nghiệp sinh thái; (3) Xây dựng nông thôn mới.",
      "D. (1) Hoàn thiện thể chế kinh tế thị trường; (2) Phát triển hạ tầng giao thông; (3) Đào tạo nhân lực chất lượng cao."
    ],
    "answer": 1
  },
  {
    "question": "Câu 11. Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, nguyên tắc phát triển nào sau đây được nhấn mạnh để không đánh đổi các giá trị cốt lõi?",
    "options": [
      "A. Ưu tiên tăng trưởng kinh tế đơn thuần bằng mọi giá.",
      "B. Không đánh đổi trật tự, kỷ cương, tiến bộ, công bằng xã hội, môi trường và các giá trị văn hoá lấy tăng trưởng kinh tế đơn thuần.",
      "C. Chấp nhận ô nhiễm môi trường trong giai đoạn đầu phát triển công nghiệp để có điều kiện thu hút đầu tư.",
      "D. Tập trung toàn bộ nguồn lực cho các đô thị lớn, bỏ qua nông thôn."
    ],
    "answer": 1
  },
  {
    "question": "Câu 12. Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, chỉ số phát triển con người (HDI) và tuổi thọ trung bình tính từ lúc sinh phấn đấu đạt mức nào vào năm 2030?",
    "options": [
      "A. HDI đạt khoảng 0,7; tuổi thọ đạt khoảng 73 tuổi.",
      "B. HDI đạt khoảng 0,8; tuổi thọ đạt khoảng 75,5 tuổi (trong đó thời gian sống khỏe mạnh đạt tối thiểu 68 năm).",
      "C. HDI đạt khoảng 0,9; tuổi thọ đạt khoảng 80 tuổi.",
      "D. HDI đạt khoảng 0,75; tuổi thọ đạt khoảng 74 tuổi."
    ],
    "answer": 1
  },
  {
    "question": "Câu 13. Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, hệ thống an sinh xã hội cần được phát triển theo hướng nào?",
    "options": [
      "A. Bao cấp toàn diện, cào bằng cho mọi đối tượng.",
      "B. Đa dạng, đa tầng, toàn diện, hiện đại, bao trùm, bền vững.",
      "C. Giao hoàn toàn cho khu vực tư nhân và các tổ chức từ thiện đảm nhiệm.",
      "D. Chỉ tập trung hỗ trợ cho các đối tượng chính sách, bỏ qua nhóm yếu thế khác."
    ],
    "answer": 1
  },
  {
    "question": "Câu 14. Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, cơ quan nào được giao chủ trì, phối hợp với Ban Chính sách, chiến lược Trung ương để theo dõi, hướng dẫn, đôn đốc, kiểm tra, giám sát việc thực hiện Nghị quyết?",
    "options": [
      "A. Ban Tuyên giáo và Dân vận Trung ương.",
      "B. Đảng ủy Công an Trung ương.",
      "C. Ủy ban Kiểm tra Trung ương.",
      "D. Ban Tổ chức Trung ương."
    ],
    "answer": 1
  },
  {
    "question": "Câu 15. Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, văn hóa được xác định giữ vai trò gì trong mô hình phát triển mới?",
    "options": [
      "A. Là lĩnh vực tiêu tốn ngân sách cần được cắt giảm.",
      "B. Là nền tảng tinh thần, nguồn lực và động lực nội sinh, năng lực sáng tạo, sức mạnh mềm cho phát triển.",
      "C. Chỉ là công cụ để quảng bá hình ảnh đất nước ra nước ngoài.",
      "D. Là yếu tố phụ trợ, chỉ phát triển mạnh sau khi kinh tế đã hoàn toàn ổn định."
    ],
    "answer": 1
  },
  {
    "question": "Câu 1. Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, mục tiêu đến năm 2045 là gì?",
    "options": [
      "A. Trở thành nước đang phát triển có công nghiệp hiện đại.",
      "B. Hoàn thành chuyển đổi sang mô hình phát triển đất nước tự cường, sáng tạo, nhân văn, bền vững, hội nhập và trở thành quốc gia phát triển, thu nhập cao.",
      "C. Đạt mức thu nhập trung bình cao và cơ bản hoàn thành công nghiệp hóa.",
      "D. Trở thành trung tâm sản xuất thông minh hàng đầu châu Á."
    ],
    "answer": 1
  },
  {
    "question": "Câu 2. Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, động lực chính của sự phát triển được xác định là gì?",
    "options": [
      "A. Vốn đầu tư nước ngoài và lao động giá rẻ.",
      "B. Tài nguyên thiên nhiên và vị trí địa lý thuận lợi.",
      "C. Khoa học, công nghệ, đổi mới sáng tạo, chuyển đổi số và trí tuệ nhân tạo quốc gia.",
      "D. Mở rộng thị trường xuất khẩu các mặt hàng truyền thống."
    ],
    "answer": 2
  },
  {
    "question": "Câu 3. Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, mô hình phát triển mới được vận hành đồng bộ theo cơ chế nào?",
    "options": [
      "A. Nhà nước lãnh đạo, Đảng quản lý, Nhân dân làm chủ.",
      "B. Đảng lãnh đạo, Nhà nước quản lý, Nhân dân làm chủ.",
      "C. Thị trường quyết định, Nhà nước điều tiết, Xã hội giám sát.",
      "D. Doanh nghiệp dẫn dắt, Nhà nước hỗ trợ, Người dân thụ hưởng."
    ],
    "answer": 1
  },
  {
    "question": "Câu 4. Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, mô hình kinh tế đến năm 2035 chuyển mạnh từ tăng trưởng chủ yếu dựa vào vốn, lao động, tài nguyên sang tăng trưởng dựa trên yếu tố nào?",
    "options": [
      "A. Xuất khẩu tài nguyên và gia công lắp ráp.",
      "B. Khoa học, công nghệ, đổi mới sáng tạo, chuyển đổi số và năng suất lao động cao.",
      "C. Thu hút tối đa vốn đầu tư trực tiếp nước ngoài (FDI).",
      "D. Mở rộng diện tích đất nông nghiệp và khai thác khoáng sản thô."
    ],
    "answer": 1
  },
  {
    "question": "Câu 5. Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, quản trị phát triển xã hội chuyển từ phương thức quản lý hành chính truyền thống và xử lý hậu quả sang hướng nào?",
    "options": [
      "A. Tăng cường kiểm soát chặt chẽ mọi hoạt động của người dân bằng biện pháp hành chính.",
      "B. Kết hợp hài hòa, hiệu quả với quản trị phát triển và kiến tạo xã hội chủ động, dựa trên dữ liệu, dự báo và phòng ngừa từ sớm, từ xa.",
      "C. Giao hoàn toàn cho khu vực tư nhân quản lý các dịch vụ xã hội cơ bản.",
      "D. Tập trung xử lý nghiêm các vi phạm sau khi sự việc đã xảy ra để răn đe."
    ],
    "answer": 1
  },
  {
    "question": "Câu 6. Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, văn hóa được xác định giữ vai trò gì trong mô hình phát triển mới?",
    "options": [
      "A. Là lĩnh vực tiêu tốn ngân sách cần được cắt giảm để tập trung cho kinh tế; khi kinh tế phát triển mới tập trung cho văn hóa",
      "B. Là nền tảng tinh thần, nguồn lực và động lực nội sinh, năng lực sáng tạo, sức mạnh mềm cho phát triển.",
      "C. Chỉ là công cụ để quảng bá hình ảnh đất nước ra nước ngoài.",
      "D. Là yếu tố phụ trợ, chỉ phát triển mạnh sau khi kinh tế đã hoàn toàn ổn định."
    ],
    "answer": 1
  },
  {
    "question": "Câu 7. Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, mục tiêu phát thải ròng bằng \"0\" được thực hiện vào năm nào?",
    "options": [
      "A. 2030",
      "B. 2040",
      "C. 2050",
      "D. 2060"
    ],
    "answer": 2
  },
  {
    "question": "Câu 8. Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, công nghiệp quốc phòng, an ninh được phát triển theo hướng nào?",
    "options": [
      "A. Phụ thuộc hoàn toàn vào nhập khẩu vũ khí, trang thiết bị hiện đại từ nước ngoài.",
      "B. Chủ động, tự lực, tự cường, tự chủ chiến lược, lưỡng dụng, hiện đại với sự tham gia phù hợp của khu vực tư nhân trong nước.",
      "C. Chỉ tập trung sản xuất các mặt hàng dân sự thông thường để xuất khẩu.",
      "D. Giải thể các doanh nghiệp quốc phòng để chuyển sang mô hình kinh tế thị trường thuần túy."
    ],
    "answer": 1
  },
  {
    "question": "Câu 9. Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, lĩnh vực nào được xác định là trọng tâm trong hoạt động đối ngoại?",
    "options": [
      "A. Ngoại giao văn hóa.",
      "B. Ngoại giao kinh tế.",
      "C. Ngoại giao quốc phòng.",
      "D. Ngoại giao môi trường."
    ],
    "answer": 1
  },
  {
    "question": "Câu 10. Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, khâu đột phá về thể chế và quản trị quốc gia yêu cầu chuyển từ tư duy nào sang tư duy nào?",
    "options": [
      "A. Từ \"kiến tạo, dẫn dắt\" sang \"quản lý, kiểm soát\".",
      "B. Từ \"quản lý, kiểm soát\" sang \"kiến tạo, dẫn dắt phát triển\".",
      "C. Từ \"phân cấp, phân quyền\" sang \"tập trung, tập quyền\".",
      "D. Từ \"dựa trên dữ liệu\" sang \"dựa trên kinh nghiệm chủ quan\"."
    ],
    "answer": 1
  },
  {
    "question": "Câu 11. Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, yếu tố nào được xác định là tư liệu sản xuất mới và tài nguyên chiến lược?",
    "options": [
      "A. Đất đai.",
      "B. Vốn.",
      "C. Dữ liệu.",
      "D. Lao động phổ thông."
    ],
    "answer": 2
  },
  {
    "question": "Câu 12. Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, ngành công nghiệp nào sau đây được ưu tiên phát triển thành ngành công nghiệp nền tảng, cốt lõi?",
    "options": [
      "A. Công nghiệp dệt may, da giày.",
      "B. Công nghiệp vật liệu.",
      "C. Công nghiệp khai khoáng thô.",
      "D. Công nghiệp lắp ráp đơn giản."
    ],
    "answer": 1
  },
  {
    "question": "Câu 13. Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, hệ thống y tế được chuyển dịch từ mô hình nào sang mô hình nào?",
    "options": [
      "A. Từ \"phòng bệnh\" sang \"chữa bệnh\".",
      "B. Từ \"chữa bệnh\" sang \"phòng bệnh và chăm sóc sức khỏe toàn diện\".",
      "C. Từ \"công lập\" sang hoàn toàn \"tư nhân hóa\".",
      "D. Từ \"chăm sóc sức khỏe ban đầu\" sang \"chuyên sâu\"."
    ],
    "answer": 1
  },
  {
    "question": "Câu 14. Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, tư duy về dân số được chuyển căn bản từ quản lý quy mô, cơ cấu sang phát triển cái gì?",
    "options": [
      "A. Vốn dân số quốc gia.",
      "B. Mật độ dân số đô thị.",
      "C. Tỷ lệ sinh thay thế.",
      "D. Di cư lao động ra nước ngoài."
    ],
    "answer": 0
  },
  {
    "question": "Câu 15. Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, cơ chế huy động, phân bổ và sử dụng nguồn lực quốc gia chuyển từ tư duy phân bổ sang tư duy nào?",
    "options": [
      "A. Tư duy kiểm soát chặt chẽ, không để lỗ hổng.",
      "B. Tư duy kiến tạo, phát huy hiệu quả nguồn lực.",
      "C. Tư duy bao cấp, hỗ trợ trực tiếp.",
      "D. Tư duy bình quân, cào bằng."
    ],
    "answer": 1
  },
  {
    "question": "Câu 20. Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, tầm nhìn đến năm 2130, Việt Nam trở thành quốc gia như thế nào?",
    "options": [
      "A. Quốc gia đang phát triển có thu nhập trung bình.",
      "B. Quốc gia xã hội chủ nghĩa phát triển trình độ cao, văn minh, hiện đại, bản sắc, có năng lực sáng tạo và sức sống trường tồn.",
      "C. Quốc gia chủ yếu dựa vào xuất khẩu tài nguyên thô và lao động.",
      "D. Quốc gia có quy mô dân số lớn nhất khu vực Đông Nam Á."
    ],
    "answer": 1
  },
  {
    "question": "Câu 1. Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, tổng GRDP của các tỉnh, thành phố ven biển đóng góp vào GDP cả nước phấn đấu đạt mức nào vào năm 2030?",
    "options": [
      "A. Trên 50%",
      "B. Trên 60%",
      "C. Trên 70%",
      "D. Trên 80%"
    ],
    "answer": 2
  },
  {
    "question": "Câu 2. Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, chi phí logistics phấn đấu giảm còn dưới mức nào vào năm 2030?",
    "options": [
      "A. 10% GDP",
      "B. 12% GDP",
      "C. 15% GDP",
      "D. 18% GDP"
    ],
    "answer": 1
  },
  {
    "question": "Câu 3. Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, tư duy phát triển cần chuyển mạnh theo hướng nào?",
    "options": [
      "A. Từ khai thác biển sang quản trị biển hiện đại, tổng hợp, thống nhất.",
      "B. Từ quản lý nhà nước sang tư nhân hóa hoàn toàn các hoạt động biển.",
      "C. Từ phát triển ven biển sang chỉ tập trung phát triển hải đảo.",
      "D. Từ tự chủ sang phụ thuộc vào đầu tư nước ngoài."
    ],
    "answer": 0
  },
  {
    "question": "Câu 4. Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, mục tiêu phát triển các dự án điện gió ngoài khơi có công suất bao nhiêu vào năm 2030?",
    "options": [
      "A. 2-4 GW",
      "B. 4-6 GW",
      "C. 6-10 GW",
      "D. 10-15 GW"
    ],
    "answer": 2
  },
  {
    "question": "Câu 5. Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, tỷ trọng nuôi biển trong tổng giá trị sản xuất thủy sản phấn đấu đạt mức nào vào năm 2030?",
    "options": [
      "A. 10%",
      "B. 15%",
      "C. 20%",
      "D. 25%"
    ],
    "answer": 1
  },
  {
    "question": "Câu 6. Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, đến năm 2030 phấn đấu hoàn thành bao nhiêu phần trăm tuyến đường bộ ven biển theo quy hoạch?",
    "options": [
      "A. 80%",
      "B. 90%",
      "C. 95%",
      "D. 100%"
    ],
    "answer": 3
  },
  {
    "question": "Câu 7. Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, động lực chính cho phát triển quốc gia biển mạnh được xác định là gì?",
    "options": [
      "A. Tài nguyên thiên nhiên và lao động giá rẻ.",
      "B. Khoa học, công nghệ, đổi mới sáng tạo, chuyển đổi số và nguồn nhân lực chất lượng cao.",
      "C. Vốn đầu tư trực tiếp nước ngoài (FDI).",
      "D. Xuất khẩu tài nguyên khoáng sản thô."
    ],
    "answer": 1
  },
  {
    "question": "Câu 8. Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, diện tích các khu bảo tồn biển, ven biển đạt tối thiểu bao nhiêu phần trăm diện tích tự nhiên vùng biển quốc gia vào năm 2030?",
    "options": [
      "A. 4%",
      "B. 5%",
      "C. 6%",
      "D. 8%"
    ],
    "answer": 2
  },
  {
    "question": "Câu 9. Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, ngành kinh tế nào được xác định là trụ cột quan trọng của kinh tế biển, tạo tiền đề để Việt Nam vươn lên trở thành cường quốc hàng hải?",
    "options": [
      "A. Kinh tế hàng hải.",
      "B. Khai thác dầu khí.",
      "C. Du lịch biển, đảo.",
      "D. Nuôi trồng thủy sản."
    ],
    "answer": 0
  },
  {
    "question": "Câu 10. Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, tốc độ tăng trưởng tổng thu du lịch biển, đảo bình quân phấn đấu đạt mức nào vào năm 2030?",
    "options": [
      "A. 10%/năm",
      "B. 12%/năm",
      "C. 14%/năm",
      "D. 16%/năm"
    ],
    "answer": 2
  },
  {
    "question": "Câu 11. Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, mục tiêu đến năm 2030 đối với chất thải nhựa ven biển là gì?",
    "options": [
      "A. Giảm 50% lượng thải ra.",
      "B. Thu gom, xử lý 100%.",
      "C. Tái chế 80%.",
      "D. Cấm hoàn toàn sản xuất nhựa dùng một lần."
    ],
    "answer": 1
  },
  {
    "question": "Câu 12. Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, lực lượng nào được xác định là nòng cốt, kiểu mẫu, làm chỗ dựa cho phát triển đội tàu cá hiện đại và bảo vệ, hỗ trợ ngư dân bám biển dài ngày?",
    "options": [
      "A. Hải quân nhân dân Việt Nam.",
      "B. Cảnh sát biển Việt Nam.",
      "C. Dân quân biển, hải đội dân quân thường trực.",
      "D. Bộ đội Biên phòng. Đáp án: C"
    ],
    "answer": 0
  },
  {
    "question": "Câu 13. Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, tỷ lệ số hóa, tích hợp và chia sẻ dữ liệu tài nguyên, môi trường, hạ tầng và hoạt động biển trong hệ thống quản lý nhà nước đạt mức nào vào năm 2030?",
    "options": [
      "A. 80%",
      "B. 90%",
      "C. 95%",
      "D. 100%"
    ],
    "answer": 3
  },
  {
    "question": "Câu 14. Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, chủ thể trực tiếp tham gia xây dựng và bảo vệ Tổ quốc từ hướng biển được xác định là ai?",
    "options": [
      "A. Các doanh nghiệp nhà nước.",
      "B. Ngư dân, cư dân biển.",
      "C. Lực lượng vũ trang.",
      "D. Các nhà khoa học."
    ],
    "answer": 1
  },
  {
    "question": "Câu 15. Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, tỷ lệ lao động qua đào tạo có bằng cấp, chứng chỉ, có kỹ năng trong các ngành, nghề, lĩnh vực biển phấn đấu đạt trên mức nào vào năm 2030?",
    "options": [
      "A. 35%",
      "B. 40%",
      "C. 45%",
      "D. 50%"
    ],
    "answer": 2
  },
  {
    "question": "Câu 1. Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, Nghị quyết này thay thế văn bản nào trước đây?",
    "options": [
      "A. Nghị quyết số 18-NQ/TW ngày 16/6/2022.",
      "B. Nghị quyết số 19-NQ/TW ngày 28/7/2026.",
      "C. Nghị quyết số 36-NQ/TW ngày 22/10/2018.",
      "D. Nghị quyết số 20-QĐ/TW ngày 25/10/2021."
    ],
    "answer": 0
  },
  {
    "question": "Câu 2. Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, đất đai thuộc sở hữu của ai?",
    "options": [
      "A. Tập thể nhân dân lao động.",
      "B. Toàn dân do Nhà nước đại diện chủ sở hữu.",
      "C. Nhà nước sở hữu toàn bộ và vĩnh viễn.",
      "D. Tư nhân và Nhà nước cùng sở hữu."
    ],
    "answer": 1
  },
  {
    "question": "Câu 3. Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, quyền sử dụng đất được xác định là gì?",
    "options": [
      "A. Là quyền sở hữu đất đai hợp pháp của cá nhân.",
      "B. Là một loại tài sản và hàng hóa đặc biệt nhưng không phải là quyền sở hữu.",
      "C. Là quyền khai thác tài nguyên thiên nhiên vô thời hạn.",
      "D. Là tài sản công không được phép chuyển nhượng."
    ],
    "answer": 1
  },
  {
    "question": "Câu 4. Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, tư duy về bồi thường khi thu hồi đất cần chuyển mạnh từ \"bồi thường tài sản bị thu hồi\" sang tư duy nào?",
    "options": [
      "A. Bồi thường theo giá thị trường tự do.",
      "B. Tái thiết cuộc sống cho người dân.",
      "C. Hỗ trợ một lần bằng tiền mặt.",
      "D. Cung cấp đất ở tái định cư bắt buộc."
    ],
    "answer": 1
  },
  {
    "question": "Câu 5. Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, mục tiêu cụ thể đến hết năm 2026 là gì?",
    "options": [
      "A. Hoàn thành sửa đổi toàn bộ hệ thống Luật Đất đai.",
      "B. Xóa bỏ hoàn toàn tranh chấp, khiếu kiện về đất đai.",
      "C. Hoàn thành xây dựng cơ sở dữ liệu số đối với toàn bộ các thửa đất đã được thu thập thông tin, dữ liệu.",
      "D. Tư nhân hóa một phần quỹ đất nông nghiệp kém hiệu quả."
    ],
    "answer": 2
  },
  {
    "question": "Câu 6. Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, mục tiêu đến hết năm 2027 là gì?",
    "options": [
      "A. Cơ bản hoàn thành công tác đo đạc lập bản đồ địa chính và xây dựng cơ sở dữ liệu đất đai đối với diện tích chưa có.",
      "B. Hoàn thành quy hoạch sử dụng đất toàn quốc và tất cả các địa phương.",
      "C. Xóa bỏ hoàn toàn tình trạng đất bỏ hoang, suy thoái trên cả nước.",
      "D. Số hóa 100% giấy chứng nhận quyền sử dụng đất đã cấp trước năm 2020."
    ],
    "answer": 0
  },
  {
    "question": "Câu 7. Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, định hướng đổi mới về quy hoạch sử dụng đất là gì?",
    "options": [
      "A. Tăng số lượng các loại quy hoạch chi tiết để quản lý chặt chẽ.",
      "B. Tiến tới chỉ xây dựng một quy hoạch thống nhất trong phạm vi một đơn vị hành chính.",
      "C. Giao toàn bộ quyền lập quy hoạch cho khu vực tư nhân.",
      "D. Không cần quy hoạch đối với đất nông nghiệp và đất lâm nghiệp."
    ],
    "answer": 1
  },
  {
    "question": "Câu 8. Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, việc giao đất, cho thuê đất đối với quỹ đất do Nhà nước quản lý được thực hiện chủ yếu qua hình thức nào?",
    "options": [
      "A. Chỉ định thầu trực tiếp cho nhà đầu tư chiến lược.",
      "B. Đấu giá quyền sử dụng đất, đấu thầu dự án có sử dụng đất.",
      "C. Giao không thu tiền sử dụng đất để thu hút đầu tư.",
      "D. Thỏa thuận trực tiếp giữa chính quyền và doanh nghiệp."
    ],
    "answer": 1
  },
  {
    "question": "Câu 9. Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, đối với các dự án bồi thường, hỗ trợ, tái định cư, Nghị quyết chủ trương thực hiện như thế nào?",
    "options": [
      "A. Gộp chung với dự án đầu tư chính để tiết kiệm thời gian.",
      "B. Tách thành dự án độc lập để thực hiện trước.",
      "C. Giao cho tư nhân tự thỏa thuận hoàn toàn với người dân.",
      "D. Thực hiện sau khi dự án đầu tư hoàn thành ít nhất 50%."
    ],
    "answer": 1
  },
  {
    "question": "Câu 10. Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, nguyên tắc xác định, thẩm định, quyết định giá đất được phân định như thế nào?",
    "options": [
      "A. Địa phương xây dựng khung, Trung ương quyết định giá cụ thể.",
      "B. Giá đất do thị trường tự quyết định hoàn toàn theo cung cầu.",
      "C. Trung ương xây dựng tiêu chí khung, địa phương quyết định giá đất.",
      "D. Giá đất do Hội đồng nhân dân các cấp quyết định cuối cùng."
    ],
    "answer": 2
  },
  {
    "question": "Câu 11. Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, Nhà nước khuyến khích giao dịch bất động sản qua hình thức nào để minh bạch hóa thị trường?",
    "options": [
      "A. Giao dịch bằng tiền mặt trực tiếp giữa các bên.",
      "B. Giao dịch qua sàn giao dịch, thanh toán qua ngân hàng, không dùng tiền mặt.",
      "C. Giao dịch qua môi giới tự do không cần đăng ký.",
      "D. Giao dịch bằng hiện vật hoặc vàng để tránh lạm phát."
    ],
    "answer": 1
  },
  {
    "question": "Câu 12. Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, chính sách đối với đất nông nghiệp hướng tới việc gì?",
    "options": [
      "A. Hạn chế tối đa việc tích tụ, tập trung đất đai.",
      "B. Mở rộng đối tượng, hạn mức nhận chuyển quyền sử dụng đất nông nghiệp.",
      "C. Cấm tuyệt đối mọi hình thức chuyển đổi mục đích sử dụng.",
      "D. Thu hồi toàn bộ đất nông nghiệp của hộ gia đình để giao cho doanh nghiệp."
    ],
    "answer": 1
  },
  {
    "question": "Câu 13. Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, cơ chế nào được thí điểm để xử lý các dự án nhà ở thương mại của chủ đầu tư không còn khả năng thực hiện?",
    "options": [
      "A. Nhà nước mua lại dự án.",
      "B. Giao cho ngân hàng xử lý nợ và phát mại tài sản.",
      "C. Tự động hủy bỏ dự án và thu hồi đất.",
      "D. Chuyển giao cho cộng đồng dân cư tự quản lý."
    ],
    "answer": 0
  },
  {
    "question": "Câu 14. Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, cơ quan nào chủ trì, phối hợp với Đảng ủy Quốc hội sửa đổi Luật Đất đai năm 2024 và các luật có liên quan?",
    "options": [
      "A. Ban Tuyên giáo và Dân vận Trung ương.",
      "B. Đảng ủy Chính phủ.",
      "C. Ban Tổ chức Trung ương.",
      "D. Ủy ban Kiểm tra Trung ương."
    ],
    "answer": 1
  },
  {
    "question": "Câu 15. Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, cơ quan nào có trách nhiệm theo dõi, đôn đốc, hướng dẫn việc thực hiện Nghị quyết và định kỳ báo cáo Bộ Chính trị, Ban Bí thư?",
    "options": [
      "A. Ban Chính sách, chiến lược Trung ương.",
      "B. Văn phòng Trung ương Đảng.",
      "C. Thanh tra Chính phủ.",
      "D. Bộ Tài nguyên và Môi trường."
    ],
    "answer": 0
  },
  {
    "question": "Câu 1. Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, công tác bảo vệ an ninh quốc gia được đặt dưới sự lãnh đạo như thế nào?",
    "options": [
      "A. Tuyệt đối, trực tiếp về mọi mặt của Đảng.",
      "B. Thống nhất và phân cấp của Quốc hội.",
      "C. Tự chủ hoàn toàn của lực lượng vũ trang.",
      "D. Linh hoạt theo từng địa phương và ngành."
    ],
    "answer": 0
  },
  {
    "question": "Câu 2. Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, mối quan hệ giữa an ninh và phát triển được xác định như thế nào?",
    "options": [
      "A. An ninh là điều kiện tiên quyết, phát triển là nền tảng của an ninh bền vững.",
      "B. Phát triển kinh tế được ưu tiên tuyệt đối, an ninh là thứ yếu.",
      "C. An ninh và phát triển là hai lĩnh vực tách biệt hoàn toàn.",
      "D. Chỉ tập trung vào an ninh quân sự, tạm hoãn các mục tiêu phát triển."
    ],
    "answer": 0
  },
  {
    "question": "Câu 3. Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, an ninh trong kỷ nguyên mới mở rộng phạm vi bảo vệ sang những yếu tố nào?",
    "options": [
      "A. Chỉ tập trung bảo vệ chủ quyền lãnh thổ và biên giới trên bộ.",
      "B. Bảo vệ các yếu tố cấu thành năng lực phát triển quốc gia, sự vận hành ổn định của toàn bộ hệ thống kinh tế, xã hội, công nghệ.",
      "C. Chỉ bảo vệ an ninh chính trị nội bộ và lãnh đạo cấp cao.",
      "D. Bảo vệ tuyệt đối các tài nguyên thiên nhiên chưa được khai thác."
    ],
    "answer": 1
  },
  {
    "question": "Câu 4. Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, loại hình an ninh nào được xác định là \"trung tâm\" trong thực hiện an ninh tổng thể?",
    "options": [
      "A. An ninh chế độ.",
      "B. An ninh con người, an ninh mạng, an ninh kinh tế.",
      "C. An ninh mạng, an ninh dữ liệu, an ninh công nghệ.",
      "D. An ninh kinh tế, an ninh năng lượng."
    ],
    "answer": 2
  },
  {
    "question": "Câu 5. Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, tư duy bảo vệ an ninh cần chuyển dịch từ \"quản lý từng nguy cơ\" sang hướng nào?",
    "options": [
      "A. Quản lý tập trung, bao cấp.",
      "B. Quản trị tương tác giữa các nguy cơ.",
      "C. Loại bỏ hoàn toàn mọi nguy cơ.",
      "D. Chấp nhận rủi ro ở mức độ cao."
    ],
    "answer": 1
  },
  {
    "question": "Câu 6. Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, mục tiêu tổng quát là ngăn ngừa, đẩy lùi từ sớm các nhân tố gây mất ổn định chính trị từ những đâu?",
    "options": [
      "A. Từ bên trong, từ không gian mạng, không gian vũ trụ, không gian tâm pháp, không gian biển và đại dương.",
      "B. Từ các thế lực thù địch bên ngoài.",
      "C. Từ các vùng biên giới trên bộ và trên biển.",
      "D. Từ các tổ chức tôn giáo trái pháp luật."
    ],
    "answer": 0
  },
  {
    "question": "Câu 7. Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, đến năm 2030, hạ tầng số trong yếu tố nào sẽ được hoàn thành chuyển đổi mật mã kháng lượng tử?",
    "options": [
      "A. Hạ tầng số trong yếu.",
      "B. Toàn bộ hệ thống internet dân sự.",
      "C. Hệ thống mạng xã hội phổ biến.",
      "D. Các thiết bị di động cá nhân."
    ],
    "answer": 0
  },
  {
    "question": "Câu 8. Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, tầm nhìn đến năm 2045, bảo vệ an ninh con người sẽ đạt mức độ nào?",
    "options": [
      "A. Thuộc nhóm dẫn đầu của khu vực và thế giới.",
      "B. Đạt mức trung bình của các nước đang phát triển.",
      "C. Tập trung chủ yếu vào an ninh y tế và thực phẩm.",
      "D. Chỉ đảm bảo cho khu vực thành thị và các trung tâm lớn."
    ],
    "answer": 0
  },
  {
    "question": "Câu 9. Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, bảo vệ an ninh chế độ được xác định là nhiệm vụ gì?",
    "options": [
      "A. Nhiệm vụ thường xuyên của ngành công an.",
      "B. Nhiệm vụ chiến lược, sống còn của quốc gia.",
      "C. Nhiệm vụ phụ trợ trong thời bình.",
      "D. Nhiệm vụ chủ yếu của lực lượng dân quân tự vệ."
    ],
    "answer": 1
  },
  {
    "question": "Câu 10. Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, để chủ động đẩy lùi nguy cơ, thách thức, cần hình thành hệ thống gì?",
    "options": [
      "A. Hệ thống thu thập, phân tích xử lý thông tin hiện đại, kết nối dữ liệu đa ngành, đa tầng.",
      "B. Hệ thống giám sát bằng camera tại mọi nơi công cộng.",
      "C. Hệ thống kiểm duyệt thông tin chặt chẽ trên internet.",
      "D. Hệ thống báo cáo hành chính theo truyền thống."
    ],
    "answer": 0
  },
  {
    "question": "Câu 11. Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, công tác phát hiện, ngăn chặn yếu tố tiềm ẩn phức tạp về an ninh, trật tự cần được thực hiện từ đâu?",
    "options": [
      "A. Từ cấp tỉnh trở lên.",
      "B. Từ cơ sở, trên các lĩnh vực, địa bàn.",
      "C. Từ các cơ quan trung ương đến địa phương.",
      "D. Từ các tổ chức quốc tế."
    ],
    "answer": 1
  },
  {
    "question": "Câu 12. Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, việc bảo đảm an ninh trong các không gian mới (vũ trụ, tâm pháp, ngầm, biển và đại dương) cần được làm gì trong các chương trình quốc gia?",
    "options": [
      "A. Tách riêng thành một chiến lược độc lập hoàn toàn.",
      "B. Bổ sung nội dung bảo vệ an ninh vào các chương trình quốc gia, chiến lược, quy hoạch.",
      "C. Giao hoàn toàn cho khu vực tư nhân đầu tư và quản lý.",
      "D. Tạm hoãn cho đến khi có công nghệ tiên tiến."
    ],
    "answer": 1
  },
  {
    "question": "Câu 13. Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, quy định về bảo đảm an ninh trong nghiên cứu, phát triển và ứng dụng trí tuệ nhân tạo (AI) cần tích hợp yếu tố an ninh từ khâu nào?",
    "options": [
      "A. Khâu thương mại hóa sản phẩm.",
      "B. Khâu thiết kế, phát triển và triển khai.",
      "C. Khâu đào tạo nhân lực.",
      "D. Khâu thanh lý, loại bỏ thiết bị."
    ],
    "answer": 1
  },
  {
    "question": "Câu 14. Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, tư duy bảo đảm an ninh năng lượng cần chuyển mạnh từ \"đảm bảo cung ứng\" sang hướng nào?",
    "options": [
      "A. \"An toàn - ổn định - tự chủ - bền vững\".",
      "B. \"Giá rẻ - dồi dào - nhập khẩu dễ dàng\".",
      "C. \"Tập trung - độc quyền - kiểm soát chặt\".",
      "D. \"Tư nhân hóa hoàn toàn - cạnh tranh tự do\"."
    ],
    "answer": 0
  },
  {
    "question": "Câu 15. Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, yếu tố nào được xác định là trụ cột của Chiến lược An ninh quốc gia?",
    "options": [
      "A. Sức mạnh lòng dân thật sự.",
      "B. Vũ khí công nghệ cao.",
      "C. Nguồn viện trợ quốc tế.",
      "D. Hệ thống pháp luật hình sự."
    ],
    "answer": 0
  },
  {
    "question": "Câu 1. Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, văn hóa Việt Nam được xác định là gì?",
    "options": [
      "A. Nguồn lực kinh tế quan trọng",
      "B. Giá trị lịch sử của các thế hệ",
      "C. Nguồn lực nội sinh quan trọng",
      "D. Sức mạnh mềm trong hoạt động đối ngoại"
    ],
    "answer": 2
  },
  {
    "question": "Câu 2. Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, phát triển văn hóa, con người được xác định là gì?",
    "options": [
      "A. Nền tảng và động lực",
      "B. Chính sách xã hội",
      "C. Nguồn lực vật chất",
      "D. Công cụ quản lý"
    ],
    "answer": 0
  },
  {
    "question": "Câu 3. Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, các giá trị văn hóa phải thực sự trở thành?",
    "options": [
      "A. Nguồn lực tài chính",
      "B. Sức mạnh mềm quốc gia",
      "C. Thị trường văn hóa",
      "D. Công cụ đối ngoại"
    ],
    "answer": 1
  },
  {
    "question": "Câu 4. Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, phát triển văn hóa nhằm trước hết?",
    "options": [
      "A. Mở rộng du lịch",
      "B. Hoàn thiện nhân cách con người xã hội chủ nghĩa",
      "C. Tăng xuất khẩu",
      "D. Phát triển nghệ thuật"
    ],
    "answer": 1
  },
  {
    "question": "Câu 5. Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, Nhân dân trong sự nghiệp phát triển văn hóa được xác định là gì?",
    "options": [
      "A. Người quản lý",
      "B. Chủ thể sáng tạo và thụ hưởng",
      "C. Đối tượng thụ hưởng",
      "D. Lực lượng hỗ trợ"
    ],
    "answer": 1
  },
  {
    "question": "Câu 6. Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, trong phát triển văn hóa, Nhà nước giữ vai trò gì?",
    "options": [
      "A. Chủ thể sáng tạo",
      "B. Quản lý",
      "C. Đầu tư chính",
      "D. Điều tiết thị trường"
    ],
    "answer": 1
  },
  {
    "question": "Câu 7. Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, đầu tư cho văn hóa là gì?",
    "options": [
      "A. Đầu tư cho phát triển bền vững",
      "B. Chi tiêu an sinh xã hội",
      "C. Khoản đầu tư ngắn hạn",
      "D. Chi phí hành chính cho các nhiệm vụ"
    ],
    "answer": 0
  },
  {
    "question": "Câu 8. Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, nguồn lực nhà nước trong phát triển văn hóa giữ vai trò gì?",
    "options": [
      "A. Chủ đạo",
      "B. Dẫn dắt",
      "C. Điều hành",
      "D. Hỗ trợ"
    ],
    "answer": 1
  },
  {
    "question": "Câu 9. Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, nguồn lực xã hội và khu vực tư nhân được xác định là gì?",
    "options": [
      "A. Nguồn lực bổ sung",
      "B. Động lực quan trọng",
      "C. Nguồn lực chủ yếu",
      "D. Lực lượng quản lý"
    ],
    "answer": 1
  },
  {
    "question": "Câu 10. Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, trong huy động nguồn lực phát triển văn hóa, thể chế giữ vai trò như thế nào?",
    "options": [
      "A. Trung tâm",
      "B. Điều phối",
      "C. Then chốt",
      "D. Bổ trợ"
    ],
    "answer": 2
  },
  {
    "question": "Câu 11. Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam yêu cầu xử lý hài hòa mối quan hệ nào?",
    "options": [
      "A. Bảo tồn và phát triển",
      "B. Trung ương và địa phương",
      "C. Nhà nước và thị trường",
      "D. Công và tư"
    ],
    "answer": 0
  },
  {
    "question": "Câu 12. Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, một mối quan hệ nội tại khác cần được xử lý hài hòa là gì?",
    "options": [
      "A. Truyền thống và hiện đại",
      "B. Thành thị và nông thôn",
      "C. Nhà nước và xã hội",
      "D. Kinh tế và văn hóa"
    ],
    "answer": 0
  },
  {
    "question": "Câu 13. Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, mục tiêu chung đến năm 2030 là xây dựng nền văn hóa gì?",
    "options": [
      "A. Tiên tiến, đậm đà bản sắc dân tộc",
      "B. Hiện đại, hội nhập sâu rộng",
      "C. Dân chủ, tự do, sáng tạo",
      "D. Đa dạng, mở và số hóa"
    ],
    "answer": 0
  },
  {
    "question": "Câu 14. Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, nền văn hóa Việt Nam đến năm 2030 được xác định là gì?",
    "options": [
      "A. Thống nhất trong đa dạng",
      "B. Thống nhất về tổ chức",
      "C. Đa dạng về thể chế",
      "D. Đồng nhất về giá trị"
    ],
    "answer": 0
  },
  {
    "question": "Câu 15. Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, môi trường văn hóa lành mạnh được xây dựng từ đâu?",
    "options": [
      "A. Gia đình đến xã hội",
      "B. Nhà trường đến cơ quan và xã hội",
      "C. Gia đình, nhà trường, xã hội và không gian số",
      "D. Nhà trường và không gian số"
    ],
    "answer": 2
  },
  {
    "question": "Câu 16. Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, đến năm 2030, đặt mục tiêu cơ bản hoàn thành?",
    "options": [
      "A. Xây dựng bảo tàng quốc gia",
      "B. Tu bổ, tôn tạo di tích quốc gia đặc biệt",
      "C. Số hóa mọi hoạt động văn hóa",
      "D. Phục dựng toàn bộ lễ hội"
    ],
    "answer": 1
  },
  {
    "question": "Câu 17. Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, đến năm 2030, công nghiệp văn hóa phấn đấu đóng góp bao nhiêu % GDP?",
    "options": [
      "A. 5% GDP",
      "B. 6% GDP",
      "C. 7% GDP",
      "D. 8% GDP"
    ],
    "answer": 2
  },
  {
    "question": "Câu 18. Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, đến năm 2030, số thương hiệu quốc gia về công nghiệp văn hóa phấn đấu hình thành là bao nhiêu?",
    "options": [
      "A. 3–5",
      "B. 5–10",
      "C. 10–15",
      "D. 15–20"
    ],
    "answer": 1
  },
  {
    "question": "Câu 19. Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, đến năm 2030, phấn đấu thành lập thêm?",
    "options": [
      "A. 1–3 trung tâm văn hóa Việt Nam ở nước ngoài",
      "B. 2–4 trung tâm văn hóa Việt Nam ở nước ngoài",
      "C. 3–5 trung tâm văn hóa Việt Nam ở nước ngoài",
      "D. 5–7 trung tâm văn hóa Việt Nam ở nước ngoài"
    ],
    "answer": 0
  },
  {
    "question": "Câu 20. Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, tầm nhìn đến năm 2045 xác định con người là gì?",
    "options": [
      "A. Đối tượng của văn hóa",
      "B. Trung tâm, chủ thể, mục tiêu, động lực",
      "C. Lực lượng sáng tạo chính",
      "D. Người thụ hưởng chính"
    ],
    "answer": 1
  },
  {
    "question": "Câu 21. Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, đến năm 2045, công nghiệp văn hóa, kinh tế sáng tạo phấn đấu đóng góp như thế nào?",
    "options": [
      "A. 7% GDP",
      "B. 8% GDP",
      "C. 9% GDP",
      "D. 10% GDP"
    ],
    "answer": 2
  },
  {
    "question": "Câu 22. Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, đến năm 2045, phấn đấu có bao nhiêu thương hiệu liên hoan quốc tế?",
    "options": [
      "A. 5 thương hiệu",
      "B. 8 thương hiệu",
      "C. 10 thương hiệu",
      "D. 12 thương hiệu"
    ],
    "answer": 2
  },
  {
    "question": "Câu 23. Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, đến năm 2045, Việt Nam phấn đấu nằm trong Top 3 ASEAN và Top bao nhiêu thế giới về Chỉ số Sức mạnh mềm?",
    "options": [
      "A. Top 20",
      "B. Top 30",
      "C. Top 40",
      "D. Top 50"
    ],
    "answer": 1
  },
  {
    "question": "Câu 24. Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, một nhiệm vụ quan trọng là đổi mới tư duy theo hướng nào?",
    "options": [
      "A. Phát triển văn hóa ngang tầm chính trị, kinh tế, xã hội",
      "B. Ưu tiên văn hóa sau kinh tế",
      "C. Tập trung vào công nghiệp văn hóa",
      "D. Đẩy mạnh xã hội hóa văn hóa"
    ],
    "answer": 0
  },
  {
    "question": "Câu 25. Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, trong công tác tuyên truyền, giáo dục về văn hóa, lực lượng nào giữ vai trò nòng cốt?",
    "options": [
      "A. Doanh nghiệp",
      "B. Báo chí, xuất bản",
      "C. Nhà trường",
      "D. Văn nghệ sĩ"
    ],
    "answer": 1
  },
  {
    "question": "Câu 1. Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, kinh tế nhà nước được xác định là gì?",
    "options": [
      "A. Thành phần kinh tế chủ yếu",
      "B. Lực lượng sản xuất chủ yếu trong nền kinh tế Việt Nam",
      "C. Giữ vai trò chủ đạo trong nền kinh tế quốc dân",
      "D. Thành phần kinh tế đặc biệt"
    ],
    "answer": 2
  },
  {
    "question": "Câu 2. Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, mục tiêu phát triển kinh tế nhà nước nhằm góp phần xây dựng nền kinh tế?",
    "options": [
      "A. Khép kín, hạn chế giao lưu thương mại với các nước",
      "B. Tự cung tự cấp, đáp ứng nhu cầu của xã hội",
      "C. Độc lập, tự chủ, hội nhập quốc tế sâu rộng",
      "D. Bao cấp phần lớn trong hoạt động kinh tế"
    ],
    "answer": 2
  },
  {
    "question": "Câu 3. Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, kinh tế nhà nước phải phát huy vai trò gì?",
    "options": [
      "A. Điều tiết, dẫn dắt, mở đường",
      "B. Thay thế kinh tế tư nhân",
      "C. Bao cấp nền kinh tế, bảo đảm công bằng",
      "D. Chi phối toàn bộ thị trường"
    ],
    "answer": 0
  },
  {
    "question": "Câu 4. Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, doanh nghiệp nhà nước phải tập trung vào?",
    "options": [
      "A. Mọi lĩnh vực sản xuất của đời sống",
      "B. Các lĩnh vực then chốt, thiết yếu",
      "C. Thương mại bán lẻ đa lĩnh vực",
      "D. Dịch vụ nhỏ lẻ bảo đảm nhiều mặt hàng"
    ],
    "answer": 1
  },
  {
    "question": "Câu 5. Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, một trong những yêu cầu đối với doanh nghiệp nhà nước là gì?",
    "options": [
      "A. Hoạt động không cần cạnh tranh",
      "B. Hoạt động theo cơ chế thị trường",
      "C. Bao cấp toàn diện để ổn định, phát triển nhanh",
      "D. Không cần đổi mới, tập trung cho sản xuất nhỏ"
    ],
    "answer": 1
  },
  {
    "question": "Câu 6. Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, một trong các nguyên tắc quản lý vốn nhà nước là gì?",
    "options": [
      "A. Bình quân",
      "B. Công khai, minh bạch",
      "C. Bao cấp",
      "D. Phân tán"
    ],
    "answer": 1
  },
  {
    "question": "Câu 7. Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, phải hoàn thiện nội dung gì?",
    "options": [
      "A. Cơ chế xin – cho",
      "B. Thể chế quản lý vốn nhà nước",
      "C. Thuế xuất khẩu",
      "D. Chính sách dân số"
    ],
    "answer": 1
  },
  {
    "question": "Câu 8. Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, doanh nghiệp nhà nước phải lấy yếu tố nào làm trung tâm?",
    "options": [
      "A. Quy mô vốn",
      "B. Hiệu quả sản xuất kinh doanh",
      "C. Lao động giá rẻ, vốn đầu tư",
      "D. Đất đai, tài nguyên thiên nhiên"
    ],
    "answer": 1
  },
  {
    "question": "Câu 9. Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, kinh tế nhà nước phải giữ vai trò chủ đạo trong việc gì?",
    "options": [
      "A. Bình ổn kinh tế vĩ mô",
      "B. Bao cấp nền kinh tế",
      "C. Thay thế khu vực tư nhân",
      "D. Quản lý giá"
    ],
    "answer": 0
  },
  {
    "question": "Câu 10. Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, một trong những mục tiêu đến năm 2030 là gì?",
    "options": [
      "A. Hình thành doanh nghiệp nhà nước có năng lực cạnh tranh khu vực",
      "B. Giảm số lượng doanh nghiệp nhỏ, tăng đầu tư cho doanh nghiệp lớn",
      "C. Tập trung đầu tư trong nước, hạn chế đầu tư ra nước ngoài",
      "D. Chỉ đầu tư trong nước, không đầu tư nước ngoài"
    ],
    "answer": 0
  },
  {
    "question": "Câu 11. Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, đổi mới quản trị doanh nghiệp theo chuẩn mực nào?",
    "options": [
      "A. Địa phương",
      "B. Quốc tế",
      "C. Truyền thống",
      "D. Bao cấp"
    ],
    "answer": 1
  },
  {
    "question": "Câu 12. Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, một trong các lĩnh vực ưu tiên đầu tư là gì?",
    "options": [
      "A. Công nghệ cao",
      "B. Kinh doanh nhỏ",
      "C. Dịch vụ ăn uống",
      "D. Bán lẻ"
    ],
    "answer": 0
  },
  {
    "question": "Câu 13. Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, doanh nghiệp nhà nước phải đi đầu trong nội dung nào?",
    "options": [
      "A. Chuyển đổi xanh",
      "B. Xuất khẩu lao động",
      "C. Kinh doanh bán lẻ",
      "D. Kinh doanh vàng"
    ],
    "answer": 0
  },
  {
    "question": "Câu 14. Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, một trong các yêu cầu đối với đầu tư công là gì?",
    "options": [
      "A. Dàn trải, kiểm soát",
      "B. Trọng tâm, trọng điểm",
      "C. Bình quân, chủ động",
      "D. Ngắn hạn, liên tục"
    ],
    "answer": 1
  },
  {
    "question": "Câu 15. Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, cần hoàn thiện thị trường nào?",
    "options": [
      "A. Lao động",
      "B. Vốn",
      "C. Khoa học và công nghệ",
      "D. Bao gồm các phương án được nêu"
    ],
    "answer": 3
  },
  {
    "question": "Câu 16. Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, một trong các nhiệm vụ là gì?",
    "options": [
      "A. Hoàn thiện pháp luật",
      "B. Giảm quản lý",
      "C. Tăng bao cấp",
      "D. Giảm đầu tư"
    ],
    "answer": 0
  },
  {
    "question": "Câu 17. Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, phải tăng cường gì?",
    "options": [
      "A. Kiểm tra, giám sát",
      "B. Bao cấp",
      "C. Xin – cho",
      "D. Phân quyền tuyệt đối"
    ],
    "answer": 0
  },
  {
    "question": "Câu 18. Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, một trong các nguyên tắc quản trị là gì?",
    "options": [
      "A. Minh bạch",
      "B. Khép kín",
      "C. Bí mật",
      "D. Chủ động"
    ],
    "answer": 0
  },
  {
    "question": "Câu 19. Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, phải phòng chống gì?",
    "options": [
      "A. Tham nhũng, tiêu cực",
      "B. Đầu tư dàn trải",
      "C. Xuất khẩu quá nhiều",
      "D. Hội nhập"
    ],
    "answer": 0
  },
  {
    "question": "Câu 20. Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, doanh nghiệp nhà nước cần phát triển gì?",
    "options": [
      "A. Khoa học, công nghệ",
      "B. Đổi mới mô hình",
      "C. Lao động giản đơn",
      "D. Sản xuất nhỏ"
    ],
    "answer": 0
  },
  {
    "question": "Câu 1. Theo Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, định hướng chiến lược thu hút đầu tư nước ngoài có sự chuyển dịch quan trọng nào dưới đây?",
    "options": [
      "A. Chuyển từ chú trọng số lượng, quy mô vốn sang chất lượng, hiệu quả, công nghệ và giá trị gia tăng.",
      "B. Chuyển từ ưu đãi dựa trên kết quả sang ưu đãi dựa hoàn toàn vào địa giới hành chính.",
      "C. Giảm bớt tỷ trọng liên kết với khu vực kinh tế trong nước.",
      "D. Hạn chế thu hút đầu tư nước ngoài trong các lĩnh vực công nghệ cao."
    ],
    "answer": 0
  },
  {
    "question": "Câu 2. Các lĩnh vực ưu tiên thu hút đầu tư nước ngoài theo tinh thần đổi mới của Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài bao gồm ngành nào sau đây?",
    "options": [
      "A. Công nghệ bán dẫn, trí tuệ nhân tạo (AI), năng lượng xanh.",
      "B. Khai thác tài nguyên thô và khoáng sản chưa qua chế biến.",
      "C. Các ngành gia công sử dụng lao động phổ thông chi phí thấp.",
      "D. Sản xuất tiêu dùng truyền thống quy mô nhỏ."
    ],
    "answer": 0
  },
  {
    "question": "Câu 3. Mục tiêu cốt lõi khi gắn kết kinh tế có vốn đầu tư nước ngoài với nền kinh tế trong nước theo Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài là gì?",
    "options": [
      "A. Giúp doanh nghiệp Việt Nam tham gia sâu hơn vào chuỗi giá trị toàn cầu và nâng cao năng lực cạnh tranh.",
      "B. Tạo sự độc lập hoàn toàn, không phụ thuộc vào thị trường quốc tế.",
      "C. Ưu tiên doanh nghiệp FDI hơn doanh nghiệp trong nước trong mọi lĩnh vực.",
      "D. Thu hẹp quy mô của khu vực kinh tế tư nhân trong nước."
    ],
    "answer": 0
  },
  {
    "question": "Câu 4. Theo Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, kinh tế có vốn đầu tư nước ngoài được xác định là gì?",
    "options": [
      "A. Thành phần kinh tế chủ đạo của nền kinh tế",
      "B. Bộ phận quan trọng của nền kinh tế quốc gia",
      "C. Khu vực kinh tế ưu tiên tuyệt đối",
      "D. Khu vực kinh tế bổ trợ"
    ],
    "answer": 1
  },
  {
    "question": "Câu 5. Theo Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, Nhà nước khuyến khích kinh tế có vốn đầu tư nước ngoài phát triển theo hướng nào?",
    "options": [
      "A. Có thời hạn",
      "B. Theo từng giai đoạn",
      "C. Phát triển lâu dài",
      "D. Theo từng ngành"
    ],
    "answer": 2
  },
  {
    "question": "Câu 6. Theo Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, phát triển kinh tế có vốn đầu tư nước ngoài phải gắn với yêu cầu nào sau đây?",
    "options": [
      "A. Gia tăng xuất khẩu",
      "B. Nâng cao năng lực tự chủ chiến lược",
      "C. Tăng đầu tư công",
      "D. Tăng lao động giá rẻ"
    ],
    "answer": 1
  },
  {
    "question": "Câu 7.  Theo Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, yêu cầu chuyển mạnh từ tư duy chủ yếu thu hút vốn sang…?",
    "options": [
      "A. Thu hút ODA",
      "B. Phát triển nền tảng đầu tư chiến lược quốc gia",
      "C. Phát triển kinh tế tư nhân",
      "D. Thu hút đầu tư ngắn hạn"
    ],
    "answer": 1
  },
  {
    "question": "Câu 8. Theo Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, tiêu chí chủ yếu trong thu hút đầu tư là gì?",
    "options": [
      "A. Quy mô vốn đáp ứng yêu cầu phát triển",
      "B. Số lượng dự án",
      "C. Chất lượng, hiệu quả và chuyển giao công nghệ",
      "D. Thời gian thực hiện"
    ],
    "answer": 2
  },
  {
    "question": "Câu 9. Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, Nhà nước bảo đảm môi trường đầu tư theo yêu cầu nào?",
    "options": [
      "A. Minh bạch, ổn định, nhất quán",
      "B. Ưu tiên doanh nghiệp nước ngoài",
      "C. Thay đổi linh hoạt",
      "D. Quản lý tập trung"
    ],
    "answer": 0
  },
  {
    "question": "Câu 10. Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, kết quả đóng góp thực chất được lấy làm gì?",
    "options": [
      "A. Tiêu chí hỗ trợ vốn để doanh nghiệp có điều kiện phát triển nhanh",
      "B. Thước đo chủ yếu trong thu hút và quản lý đầu tư nước ngoài",
      "C. Điều kiện miễn thuế",
      "D. Điều kiện cấp phép"
    ],
    "answer": 1
  },
  {
    "question": "Câu 11. Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, mục tiêu tổng quát đến năm 2030 là đưa Việt Nam trở thành?",
    "options": [
      "A. Trung tâm tài chính ASEAN",
      "B. Điểm đến có sức cạnh tranh thu hút nguồn vốn nước ngoài chất lượng cao",
      "C. Quốc gia xuất khẩu lớn nhất ASEAN",
      "D. Trung tâm logistics Đông Nam Á"
    ],
    "answer": 1
  },
  {
    "question": "Câu 11. Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, giai đoạn 2026-2030 phấn đấu thu hút vốn FDI đăng ký khoảng?",
    "options": [
      "A. 100–150 tỷ USD",
      "B. 150–200 tỷ USD",
      "C. 200–300 tỷ USD",
      "D. 300–400 tỷ USD"
    ],
    "answer": 2
  },
  {
    "question": "Câu 12. Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, vốn FDI thực hiện giai đoạn 2026-2030 khoảng?",
    "options": [
      "A. 80–100 tỷ USD",
      "B. 100–150 tỷ USD",
      "C. 150–200 tỷ USD",
      "D. 250–300 tỷ USD"
    ],
    "answer": 2
  },
  {
    "question": "Câu 13. Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, đến năm 2030, bao nhiêu phần trăm vốn đầu tư nước ngoài đến từ các nền kinh tế phát triển?",
    "options": [
      "A. 50%",
      "B. 60%",
      "C. 75%",
      "D. 90%"
    ],
    "answer": 2
  },
  {
    "question": "Câu 14. Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, ít nhất bao nhiêu tập đoàn công nghệ hàng đầu thế giới đặt trung tâm nghiên cứu và phát triển (R&D) tại Việt Nam?",
    "options": [
      "A. 2",
      "B. 3",
      "C. 5",
      "D. 10"
    ],
    "answer": 1
  },
  {
    "question": "Câu 15. Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, đến năm 2030, tỷ lệ nội địa hóa trung bình trong các ngành công nghiệp chủ lực đạt bao nhiêu %?",
    "options": [
      "A. 30–35%",
      "B. 35–40%",
      "C. 45–50%",
      "D. 60–65%"
    ],
    "answer": 2
  },
  {
    "question": "Câu 16. Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, đến năm 2030 phấn đấu có khoảng bao nhiêu doanh nghiệp Việt Nam tham gia chuỗi giá trị của doanh nghiệp FDI?",
    "options": [
      "A. 2.000",
      "B. 5.000",
      "C. 10.000",
      "D. 20.000"
    ],
    "answer": 2
  },
  {
    "question": "Câu 17. Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, tỷ lệ khu công nghiệp sinh thái đạt khoảng bao nhiêu %?",
    "options": [
      "A. 5%",
      "B. 10%",
      "C. 20%",
      "D. 30%"
    ],
    "answer": 1
  },
  {
    "question": "Câu 18. Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, phấn đấu trước năm 2030, thị trường chứng khoán Việt Nam đạt được gì?",
    "options": [
      "A. Gia nhập OECD",
      "B. MSCI nâng hạng",
      "C. Gia nhập G20",
      "D. Gia nhập CPTPP"
    ],
    "answer": 1
  },
  {
    "question": "Câu 19. Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, đến năm 2045, khu vực FDI đóng góp khoảng bao nhiêu GDP?",
    "options": [
      "A. 20%",
      "B. 25%",
      "C. 30%",
      "D. 35%"
    ],
    "answer": 2
  },
  {
    "question": "Câu 20. Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, đến năm 2045, FDI chiếm khoảng bao nhiêu tổng vốn đầu tư toàn xã hội?",
    "options": [
      "A. 15%",
      "B. 20%",
      "C. 25%",
      "D. 30%"
    ],
    "answer": 2
  },
  {
    "question": "Câu 1. Nội dung trọng tâm của Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng là gì?",
    "options": [
      "A. Công tác huấn luyện, SSCĐ",
      "B. Giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật, bảo đảm an toàn",
      "C. Xây dựng lực lượng, tổ chức biên chế",
      "D. Hậu cần, kỹ thuật và đời sống"
    ],
    "answer": 1
  },
  {
    "question": "Câu 2. Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, công tác giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn được xác định là gì?",
    "options": [
      "A. Nhiệm vụ bổ trợ",
      "B. Nhiệm vụ chính trị trọng tâm",
      "C. Nhiệm vụ chuyên ngành",
      "D. Nhiệm vụ theo thời vụ"
    ],
    "answer": 1
  },
  {
    "question": "Câu 3. Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, toàn quân tổ chức hoạt động gì?",
    "options": [
      "A. Đợt kiểm tra chính trị, quân sự",
      "B. Đợt sinh hoạt chính trị và “chỉnh huấn” sâu rộng",
      "C. Đợt diễn tập toàn quân về tư tưởng, kỷ luật",
      "D. Đợt hội thao kỷ luật, an toàn giao thông"
    ],
    "answer": 1
  },
  {
    "question": "Câu 4. Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, nội dung nào được yêu cầu quán triệt sâu sắc?",
    "options": [
      "A. “7 dám”",
      "B. “5 vững”",
      "C. “6 rõ”",
      "D. Các phương án đã nêu"
    ],
    "answer": 3
  },
  {
    "question": "Câu 5. Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, người chỉ huy, chính ủy, chính trị viên các cấp chịu trách nhiệm chính về nội dung nào?",
    "options": [
      "A. Công tác huấn luyện, sẵn sàng chiến đấu, bảo đảm hậu cần, kỹ thuật và các nhiệm vụ khác",
      "B. Chất lượng giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật, bảo đảm an toàn",
      "C. Công tác đối ngoại, xây dựng hình ảnh “Bộ đội Cụ Hồ”",
      "D. Hoạt động sản xuất gắn với bảo đảm quốc phòng, an ninh"
    ],
    "answer": 1
  },
  {
    "question": "Câu 6. Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, chỉ huy từ cấp trung đoàn trở lên phải làm gì?",
    "options": [
      "A. Tăng cường kiểm tra cấp dưới",
      "B. Tập trung kiểm tra khi có vụ việc",
      "C. Kiểm tra theo kế hoạch năm",
      "D. Giao toàn bộ cho cơ quan chính trị"
    ],
    "answer": 0
  },
  {
    "question": "Câu 7. Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, chỉ huy cấp tiểu đoàn, đại đội phải làm gì?",
    "options": [
      "A. Thường xuyên bám sát hoạt động của bộ đội",
      "B. Tăng cường quản lý trong giờ hành chính",
      "C. Giao quản lý cho cán bộ cấp dưới",
      "D. Chỉ quan tâm quân nhân yếu kém"
    ],
    "answer": 0
  },
  {
    "question": "Câu 8. Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, việc quản lý quân nhân cần chú trọng cả nội dung nào?",
    "options": [
      "A. Ngày nghỉ, giờ nghỉ",
      "B. Thời gian huấn luyện",
      "C. Thời gian giao ban",
      "D. Thời gian trực và nhiệm vụ đột xuất"
    ],
    "answer": 0
  },
  {
    "question": "Câu 9. Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, khi có vụ việc xảy ra, đơn vị phải tránh biểu hiện gì?",
    "options": [
      "A. Kiên quyết xử lý",
      "B. Bao che, giấu giếm khuyết điểm",
      "C. Báo cáo kịp thời",
      "D. Kiểm tra, xác minh"
    ],
    "answer": 1
  },
  {
    "question": "Câu 10. Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, một yêu cầu quan trọng trong tuyển chọn, đào tạo và sử dụng cán bộ là gì?",
    "options": [
      "A. Đúng người, đúng việc",
      "B. Tăng số lượng cán bộ",
      "C. Ưu tiên thâm niên",
      "D. Ưu tiên quân hàm"
    ],
    "answer": 0
  },
  {
    "question": "Câu 11. Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, công tác bảo vệ chính trị nội bộ phải gắn với gì?",
    "options": [
      "A. Bảo vệ bí mật nhà nước, an ninh, an toàn",
      "B. Phát triển kinh tế, bảo đảm an ninh, an toàn",
      "C. Đối ngoại quân sự, ứng dụng khoa học",
      "D. Tăng gia sản xuất, bảo đảm đời sống"
    ],
    "answer": 0
  },
  {
    "question": "Câu 12. Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, một trong những biện pháp xây dựng môi trường văn hóa quân sự là gì?",
    "options": [
      "A. Tăng cường dân chủ, kỷ luật, kỷ cương",
      "B. Hạn chế đối thoại",
      "C. Giảm hoạt động tập thể",
      "D. Tăng quản lý hành chính"
    ],
    "answer": 0
  },
  {
    "question": "Câu 13. Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, cơ quan thông tấn, báo chí trong Quân đội cần chú trọng gì?",
    "options": [
      "A. Tăng tin tức giải trí",
      "B. Tuyên truyền gương người tốt, việc tốt, mô hình hay",
      "C. Hạn chế thông tin tích cực",
      "D. Chỉ đưa tin hoạt động cấp trên"
    ],
    "answer": 1
  },
  {
    "question": "Câu 14. Theo Nghị quyết số 09-NQ/ĐU ngày 13/7/2026 của Đảng ủy Quân khu 5 về lãnh đạo tăng cường công tác giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn trong LLVT Quân khu, phương hướng trọng tâm là gì?",
    "options": [
      "A. Tăng quân số",
      "B. Tạo chuyển biến vững chắc về nhận thức, trách nhiệm và hành động",
      "C. Mở rộng đối ngoại",
      "D. Tăng đầu tư xây dựng"
    ],
    "answer": 1
  },
  {
    "question": "Câu 15. Theo Nghị quyết số 09-NQ/ĐU ngày 13/7/2026 của Đảng ủy Quân khu 5 về lãnh đạo tăng cường công tác giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn trong LLVT Quân khu, quản lý tư tưởng bộ đội cần được thực hiện theo tư duy như thế nào?",
    "options": [
      "A. Quản lý hành chính",
      "B. Quản trị nhận thức",
      "C. Quản lý tập trung",
      "D. Xử lý vụ việc"
    ],
    "answer": 1
  },
  {
    "question": "Câu 16. Theo Nghị quyết số 09-NQ/ĐU ngày 13/7/2026 của Đảng ủy Quân khu 5 về lãnh đạo tăng cường công tác giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn trong LLVT Quân khu, cùng với “quản trị nhận thức”, cần đẩy mạnh gì?",
    "options": [
      "A. Chủ động kiến tạo thông tin",
      "B. Quản lý tập trung",
      "C. Hạn chế thông tin",
      "D. Kiểm soát hành chính"
    ],
    "answer": 0
  },
  {
    "question": "Câu 17. Theo Nghị quyết số 09-NQ/ĐU ngày 13/7/2026 của Đảng ủy Quân khu 5 về lãnh đạo tăng cường công tác giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn trong LLVT Quân khu, phương châm xử lý các vấn đề về tư tưởng, kỷ luật và an toàn là gì?",
    "options": [
      "A. Xử lý từ trên xuống",
      "B. Phòng ngừa là chính, phát hiện sớm, ngăn ngừa từ xa, giải quyết từ cơ sở",
      "C. Chờ vụ việc xảy ra",
      "D. Tập trung xử lý sau vi phạm"
    ],
    "answer": 1
  },
  {
    "question": "Câu 18. Theo Nghị quyết số 09-NQ/ĐU ngày 13/7/2026 của Đảng ủy Quân khu 5 về lãnh đạo tăng cường công tác giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn trong LLVT Quân khu, phương châm nào xác định rõ vị trí của bốn mặt công tác?",
    "options": [
      "A. Giáo dục chính trị là nền tảng; quản lý tư tưởng là trọng tâm; duy trì kỷ luật là khâu then chốt; bảo đảm an toàn là yêu cầu xuyên suốt",
      "B. Kỷ luật là nền tảng; giáo dục là trọng tâm; an toàn là khâu then chốt; quản lý tư tưởng là thường xuyên",
      "C. Tư tưởng là nền tảng; an toàn là trọng tâm; giáo dục là then chốt; tư tưởng là quan trọng",
      "D. An toàn là nền tảng; kỷ luật là trọng tâm; tư tưởng là yêu cầu xuyên suốt"
    ],
    "answer": 0
  },
  {
    "question": "Câu 19. Theo Nghị quyết số 09-NQ/ĐU ngày 13/7/2026 của Đảng ủy Quân khu 5 về lãnh đạo tăng cường công tác giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn trong LLVT Quân khu, một trong những chỉ tiêu về mô hình quản lý tư tưởng, kỷ luật là gì?",
    "options": [
      "A. Mỗi đại đội có ít nhất 1 mô hình",
      "B. Mỗi trung đoàn, lữ đoàn và tương đương trở lên có ít nhất 1 mô hình",
      "C. Mỗi đơn vị trực thuộc Quân khu có ít nhất 1 mô hình",
      "D. Mỗi tiểu đoàn có ít nhất 2 mô hình"
    ],
    "answer": 1
  },
  {
    "question": "Câu 20. Theo Nghị quyết số 09-NQ/ĐU ngày 13/7/2026 của Đảng ủy Quân khu 5 về lãnh đạo tăng cường công tác giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn trong LLVT Quân khu, “6 rõ” gồm?",
    "options": [
      "A. Rõ người, rõ việc, rõ thời gian, rõ trách nhiệm, rõ sản phẩm, rõ thẩm quyền",
      "B. Rõ mục tiêu, rõ kế hoạch, rõ cán bộ, rõ đơn vị, rõ thời gian, rõ kết quả",
      "C. Rõ người, rõ việc, rõ kinh phí, rõ tiến độ, rõ kết quả, rõ kiểm tra",
      "D. Rõ nhiệm vụ, rõ tổ chức, rõ cán bộ, rõ quyền hạn, rõ tiến độ, rõ kết quả"
    ],
    "answer": 0
  },
  {
    "question": "Câu 1. Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, việc phát huy phẩm chất “Bộ đội Cụ Hồ” thời gian qua đã gắn chặt với nội dung nào sau đây?",
    "options": [
      "A. Thực hiện các cuộc vận động, phong trào thi đua, gắn xây dựng phẩm chất “Bộ đội Cụ Hồ” với thực hiện nhiệm vụ chính trị của cơ quan, đơn vị.",
      "B. Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.",
      "C. Đẩy mạnh công tác giáo dục chính trị, tư tưởng, gắn rèn luyện phẩm chất “Bộ đội Cụ Hồ” với xây dựng bản lĩnh chính trị và ý thức trách nhiệm.",
      "D. Thực hiện nghiêm các quy định về xây dựng, chỉnh đốn Đảng, gắn rèn luyện phẩm chất “Bộ đội Cụ Hồ” với nâng cao chất lượng đội ngũ cán bộ, đảng viên."
    ],
    "answer": 1
  },
  {
    "question": "Câu 2. Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, chỉ đạo của Tổng Bí thư, Chủ tịch nước Tô Lâm được quán triệt gồm?",
    "options": [
      "A. Tập trung xây dựng bản lĩnh chính trị, phẩm chất đạo đức và ý thức trách nhiệm, đồng thời phòng ngừa những biểu hiện tiêu cực.",
      "B. “2 kiên định, 2 đẩy mạnh, 2 ngăn ngừa” và phương châm “5 vững”.",
      "C. Tập trung nâng cao chất lượng đội ngũ, giữ vững kỷ luật, đoàn kết và chủ động phòng ngừa những hạn chế.",
      "D. Xây dựng phẩm chất, năng lực, trách nhiệm và kỷ luật, đồng thời đấu tranh với những biểu hiện lệch lạc."
    ],
    "answer": 1
  },
  {
    "question": "Câu 3. Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, kết quả phát huy giá trị văn hóa “Bộ đội Cụ Hồ” thời kỳ mới là gì?",
    "options": [
      "A. Tiêu chí quan trọng để khuyến khích cán bộ, đảng viên, quần chúng nâng cao ý thức trách nhiệm trong thực hiện nhiệm vụ.",
      "B. Tiêu chí bắt buộc đánh giá kết quả hoàn thành nhiệm vụ.",
      "C. Nội dung tham khảo để các cấp ủy, tổ chức đảng và người chỉ huy xem xét mức độ rèn luyện phẩm chất, đạo đức của cán bộ, đảng viên.",
      "D. Nội dung chủ yếu áp dụng đối với cán bộ chủ trì, gắn với trách nhiệm nêu gương và kết quả lãnh đạo, chỉ đạo thực hiện nhiệm vụ."
    ],
    "answer": 1
  },
  {
    "question": "Câu 4. Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, việc tu dưỡng, rèn luyện theo chuẩn mực “Bộ đội Cụ Hồ” phải trở thành?",
    "options": [
      "A. Hoạt động được tổ chức theo từng đợt, gắn với các sự kiện chính trị và những nhiệm vụ trọng tâm của cơ quan, đơn vị.",
      "B. Phong trào thi đua được triển khai hằng năm.",
      "C. Nhu cầu tự thân, ý thức tự giác, việc làm thường xuyên hằng ngày.",
      "D. Kết quả rèn luyện phẩm chất, đạo đức và mức độ hoàn thành nhiệm vụ của từng cá nhân."
    ],
    "answer": 2
  },
  {
    "question": "Câu 5. Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, việc phát huy giá trị văn hóa “Bộ đội Cụ Hồ” phải được cụ thể hóa phù hợp với nội dung nào sau đây?",
    "options": [
      "A. Đặc điểm, tình hình và yêu cầu thực tiễn của từng cơ quan, đơn vị.",
      "B. Chức năng, nhiệm vụ của từng cơ quan, đơn vị và chức trách của mỗi quân nhân.",
      "C. Đặc điểm tổ chức, biên chế, điều kiện công tác và yêu cầu xây dựng chính quy của từng cơ quan, đơn vị trong toàn quân.",
      "D. Đặc điểm địa bàn, môi trường công tác và điều kiện thực hiện nhiệm vụ của từng cơ quan, đơn vị trong tình hình mới."
    ],
    "answer": 1
  },
  {
    "question": "Câu 6. Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, cán bộ, đảng viên trong toàn quân phải duy trì thường xuyên nội dung nào?",
    "options": [
      "A. Đăng ký nội dung phấn đấu gắn với yêu cầu nâng cao chất lượng và hiệu quả thực hiện nhiệm vụ.",
      "B. Đăng ký kế hoạch học tập và nâng cao trình độ mọi mặt đáp ứng yêu cầu nhiệm vụ trong tình hình mới.",
      "C. Đăng ký, cam kết tu dưỡng, rèn luyện, phấn đấu.",
      "D. Đăng ký kế hoạch học tập và nâng cao trình độ mọi mặt."
    ],
    "answer": 2
  },
  {
    "question": "Câu 7. Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, kết quả phát huy giá trị văn hóa “Bộ đội Cụ Hồ” phải được đánh giá bằng:",
    "options": [
      "A. Kết quả thi đua, mức độ hoàn thành các chỉ tiêu và những thành tích nổi bật của cá nhân, tập thể trong thực hiện nhiệm vụ.",
      "B. Bản lĩnh chính trị, lòng trung thành và kết quả hoàn thành nhiệm vụ.",
      "C. Phẩm chất đạo đức, ý thức tổ chức kỷ luật và tinh thần trách nhiệm trong thực hiện chức trách, nhiệm vụ được giao.",
      "D. Ý thức tự giác tu dưỡng, tinh thần đoàn kết và thái độ trách nhiệm của cán bộ, chiến sĩ trong công tác và sinh hoạt."
    ],
    "answer": 1
  },
  {
    "question": "Câu 8. Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, việc phát huy giá trị văn hóa “Bộ đội Cụ Hồ” phải kết hợp chặt chẽ với:",
    "options": [
      "A. Công tác xây dựng nền nếp chính quy, quản lý kỷ luật và nâng cao chất lượng huấn luyện, sẵn sàng chiến đấu của cơ quan, đơn vị.",
      "B. Công tác xây dựng, chỉnh đốn Đảng và xây dựng đơn vị vững mạnh toàn diện “mẫu mực, tiêu biểu”.",
      "C. Công tác giáo dục chính trị, tư tưởng, xây dựng bản lĩnh chính trị và nâng cao ý thức trách nhiệm của cán bộ, chiến sĩ.",
      "D. Công tác thi đua, khen thưởng, xây dựng môi trường văn hóa và phát huy tinh thần đoàn kết trong cơ quan, đơn vị."
    ],
    "answer": 1
  },
  {
    "question": "Câu 9. Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, phương châm nêu gương của đội ngũ cán bộ là gì?",
    "options": [
      "A. Đi trước, làm trước.",
      "B. Trên trước, dưới sau.",
      "C. Dưới trước, trên sau.",
      "D. Học trước, làm sau."
    ],
    "answer": 1
  },
  {
    "question": "Câu 10. Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, nội dung nào được chú trọng trong xây dựng môi trường văn hóa quân sự?",
    "options": [
      "A. Bảo đảm cơ sở vật chất và điều kiện sinh hoạt, học tập cho bộ đội.",
      "B. Xây dựng các mối quan hệ chuẩn mực, đề cao dân chủ, giữ nghiêm kỷ luật.",
      "C. Xây dựng đời sống văn hóa lành mạnh, phát huy tinh thần đoàn kết, trách nhiệm và ý thức tự giác của cán bộ, chiến sĩ.",
      "D. Xây dựng môi trường công tác chính quy, nâng cao chất lượng giao tiếp, ứng xử và thực hiện nghiêm các quy định của đơn vị."
    ],
    "answer": 1
  },
  {
    "question": "Câu 11. Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, cần kiên quyết đấu tranh phản bác?",
    "options": [
      "A. Các quan điểm, nhận thức lệch lạc về xây dựng phẩm chất, đạo đức và văn hóa của người quân nhân trong tình hình mới.",
      "B. Các luận điệu xuyên tạc, phủ nhận giá trị văn hóa \"Bộ đội Cụ Hồ\".",
      "C. Các biểu hiện nhận thức không đúng về truyền thống, phẩm chất và chuẩn mực văn hóa của Quân đội nhân dân Việt Nam.",
      "D. Các thông tin sai lệch, thiếu căn cứ."
    ],
    "answer": 1
  },
  {
    "question": "Câu 12: Theo tinh thần Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, yếu tố quyết định chất lượng, hiệu quả phát huy giá trị văn hóa “Bộ đội Cụ Hồ” thời kỳ mới là:",
    "options": [
      "A. Sự chủ động của cơ quan chính trị, vai trò của đội ngũ cán bộ và chất lượng công tác giáo dục, tuyên truyền trong toàn đơn vị.",
      "B. Vai trò lãnh đạo của cấp ủy, tổ chức đảng và trách nhiệm của người chỉ huy, chính ủy, chính trị viên.",
      "C. Ý thức tự giác của cán bộ, đảng viên, vai trò nêu gương của cán bộ các cấp và sự tích cực tu dưỡng, rèn luyện của quân nhân.",
      "D. Chất lượng công tác giáo dục, rèn luyện, xây dựng môi trường văn hóa và sự phối hợp của các tổ chức trong cơ quan, đơn vị."
    ],
    "answer": 1
  },
  {
    "question": "Câu 13. Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, yêu cầu đối với công tác lãnh đạo là phải làm gì?",
    "options": [
      "A. Chỉ đạo theo từng vụ việc.",
      "B. Chủ động, quyết liệt và sát thực tiễn.",
      "C. Giao khoán cho cơ quan chính trị.",
      "D. Chỉ tập trung vào tuyên truyền."
    ],
    "answer": 1
  },
  {
    "question": "Câu 14. Theo Chị thị số 676-CT/TW của Ban Thường vụ Quân ủy Trung ương, nhiệm vụ đấu tranh trên không gian mạng nhằm mục tiêu trực tiếp nào?",
    "options": [
      "A. Chủ động tuyên truyền, lan tỏa những hình ảnh đẹp, gương người tốt, việc tốt và giá trị văn hóa của cán bộ, chiến sĩ trên không gian mạng.",
      "B. Bảo vệ nền tảng tư tưởng của Đảng và giá trị văn hóa “Bộ đội Cụ Hồ”.",
      "C. Chủ động định hướng thông tin, nâng cao nhận thức và trách nhiệm của cán bộ, chiến sĩ khi tham gia các hoạt động trên không gian mạng.",
      "D. Phát huy hiệu quả các nền tảng số, nâng cao năng lực ứng dụng công nghệ và xây dựng môi trường thông tin lành mạnh trong Quân đội."
    ],
    "answer": 1
  },
  {
    "question": "Câu 15. Theo Chị thị số 676-CT/TW của Ban Thường vụ Quân ủy Trung ương, yêu cầu đối với công tác kiểm tra, giám sát là gì?",
    "options": [
      "A. Thực hiện định kỳ khi có yêu cầu.",
      "B. Tiến hành thường xuyên, kịp thời phát hiện và chấn chỉnh hạn chế.",
      "C. Chỉ kiểm tra cuối năm.",
      "D. Chỉ kiểm tra đơn vị yếu."
    ],
    "answer": 1
  },
  {
    "question": "Câu 16. Theo Chị thị số 676-CT/TW của Ban Thường vụ Quân ủy Trung ương, việc đánh giá kết quả phát huy giá trị văn hóa “Bộ đội Cụ Hồ” cần bảo đảm yêu cầu nào?",
    "options": [
      "A. Đánh giá trên cơ sở báo cáo của cơ quan, đơn vị, kết hợp với nhận xét của cấp ủy và người chỉ huy trong quá trình thực hiện.",
      "B. Thực chất, khách quan, gắn với kết quả thực hiện nhiệm vụ.",
      "C. Đánh giá trên cơ sở kết quả xây dựng, duy trì và nhân rộng các mô hình, điển hình trong phát huy giá trị văn hóa “Bộ đội Cụ Hồ”.",
      "D. Đánh giá theo nhận xét, kết luận của cấp trên."
    ],
    "answer": 1
  },
  {
    "question": "Câu 17. Theo Chị thị số 676-CT/TW của Ban Thường vụ Quân ủy Trung ương, việc biểu dương, khen thưởng điển hình tiên tiến nhằm mục đích chủ yếu nào?",
    "options": [
      "A. Tạo động lực để cán bộ, chiến sĩ tích cực tu dưỡng, rèn luyện, phấn đấu hoàn thành tốt chức trách, nhiệm vụ được giao.",
      "B. Lan tỏa, nhân rộng những giá trị tốt đẹp.",
      "C. Tạo sức thuyết phục trong giáo dục, nêu gương, góp phần củng cố ý thức trách nhiệm và động cơ phấn đấu của cán bộ, chiến sĩ.",
      "D. Tạo động lực duy trì và nâng cao chất lượng thực hiện nhiệm vụ trong cơ quan, đơn vị."
    ],
    "answer": 1
  },
  {
    "question": "Câu 18. Theo Chị thị số 676-CT/TW của Ban Thường vụ Quân ủy Trung ương, nội dung nào thể hiện rõ yêu cầu nâng cao trách nhiệm của người đứng đầu?",
    "options": [
      "A. Tăng cường kiểm tra, giám sát và chấn chỉnh những hạn chế trong thực hiện nhiệm vụ.",
      "B. Thực hiện nêu gương trong mọi hoạt động.",
      "C. Đổi mới phương pháp lãnh đạo, nâng cao hiệu quả quản lý, điều hành.",
      "D. Xây dựng đơn vị chính quy, duy trì nền nếp và chấp hành nghiêm kỷ luật."
    ],
    "answer": 1
  },
  {
    "question": "Câu 19. Theo Chị thị số 676-CT/TW của Ban Thường vụ Quân ủy Trung ương, nội dung nào cần được coi là giải pháp quan trọng để xây dựng môi trường văn hóa quân sự lành mạnh?",
    "options": [
      "A. Tăng cường cơ sở vật chất, bảo đảm điều kiện sinh hoạt và công tác cho bộ đội.",
      "B. Phát huy dân chủ đi đôi với giữ nghiêm kỷ luật.",
      "C. Tăng cường hoạt động giáo dục, tuyên truyền.",
      "D. Đầu tư trang thiết bị, nâng cao điều kiện phục vụ công tác và sinh hoạt của bộ đội."
    ],
    "answer": 1
  },
  {
    "question": "Câu 20. Theo Chị thị số 676-CT/TW của Ban Thường vụ Quân ủy Trung ương, việc phát huy giá trị văn hóa “Bộ đội Cụ Hồ” phải được thực hiện theo yêu cầu nào?",
    "options": [
      "A. Theo từng phong trào, gắn với các đợt thi đua và nhiệm vụ trọng tâm của cơ quan, đơn vị.",
      "B. Có trọng tâm, trọng điểm, tập trung vào những thời điểm và nhiệm vụ cần thiết.",
      "C. Thường xuyên, liên tục, đồng bộ và hiệu quả.",
      "D. Theo từng chuyên ngành, phù hợp với chức năng, nhiệm vụ và đặc điểm hoạt động của từng cơ quan, đơn vị."
    ],
    "answer": 2
  },
  {
    "question": "Câu 1. Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, tình thương yêu đồng chí, đồng đội trong Quân đội ta được xác định như thế nào?",
    "options": [
      "A. Một truyền thống tốt đẹp được hình thành, kế thừa và phát huy trong quá trình xây dựng, chiến đấu và trưởng thành của Quân đội.",
      "B. Một nội dung quan trọng trong xây dựng tinh thần đoàn kết, ý thức tổ chức kỷ luật và trách nhiệm của cán bộ, chiến sĩ trong đơn vị.",
      "C. Sợi chỉ đỏ xuyên suốt, vừa là thuộc tính bản chất của quân đội cách mạng, vừa là cơ sở tạo nên giá trị văn hóa quân sự tốt đẹp.",
      "D. Một chuẩn mực đạo đức được cụ thể hóa trong quan hệ công tác, sinh hoạt và thực hiện nhiệm vụ của cán bộ, chiến sĩ."
    ],
    "answer": 2
  },
  {
    "question": "Câu 2. Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, tình thương yêu đồng chí, đồng đội là phẩm chất đặc biệt trong nhân cách của ai?",
    "options": [
      "A. Người cán bộ lãnh đạo, chỉ huy.",
      "B. Người quân nhân cách mạng - “Bộ đội Cụ Hồ”.",
      "C. Người đảng viên trong quá trình tu dưỡng, rèn luyện phẩm chất đạo đức và thực hiện chức trách, nhiệm vụ.",
      "D. Người chiến sĩ trong quá trình học tập, huấn luyện, công tác và xây dựng mối quan hệ đoàn kết trong đơn vị."
    ],
    "answer": 1
  },
  {
    "question": "Câu 3. Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, Di chúc của Chủ tịch Hồ Chí Minh, cách tốt nhất để củng cố và phát triển sự đoàn kết, thống nhất của Đảng là gì?",
    "options": [
      "A. Tăng cường kiểm tra, giám sát, giữ vững nguyên tắc tổ chức và nâng cao ý thức chấp hành kỷ luật của cán bộ, đảng viên.",
      "B. Đổi mới phương thức lãnh đạo, nâng cao năng lực tổ chức thực hiện và phát huy vai trò, trách nhiệm của cấp ủy, tổ chức đảng.",
      "C. Thực hành dân chủ rộng rãi, thường xuyên và nghiêm chỉnh tự phê bình và phê bình.",
      "D. Đẩy mạnh công tác thi đua, khen thưởng, phát huy tinh thần trách nhiệm và động viên cán bộ, đảng viên hoàn thành tốt nhiệm vụ."
    ],
    "answer": 2
  },
  {
    "question": "Câu 4. Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, tình thương yêu đồng chí, đồng đội không chỉ cần có động cơ đúng mà còn phải có gì?",
    "options": [
      "A. Trình độ chuyên môn cao.",
      "B. Phương pháp đúng.",
      "C. Kỷ luật nghiêm.",
      "D. Quyền hạn đầy đủ."
    ],
    "answer": 1
  },
  {
    "question": "Câu 5. Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026,  theo Chủ tịch Hồ Chí Minh, “Thương yêu là giúp họ học tập thêm, tiến bộ thêm...” còn bao gồm nội dung nào?",
    "options": [
      "A. Luôn biểu dương, động viên trước tập thể để khích lệ tinh thần và tạo động lực phấn đấu cho cán bộ, chiến sĩ.",
      "B. Luôn chú ý công tác của họ, thấy khuyết điểm thì giúp sửa chữa ngay.",
      "C. Thường xuyên quan tâm, hỗ trợ và trực tiếp giải quyết những khó khăn trong công việc để họ hoàn thành tốt nhiệm vụ.",
      "D. Thường xuyên động viên về tinh thần, tạo điều kiện để cán bộ, chiến sĩ yên tâm học tập, công tác và rèn luyện."
    ],
    "answer": 1
  },
  {
    "question": "Câu 6. Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, theo Chủ tịch Hồ Chí Minh, sống tình nghĩa trong quân đội luôn gắn liền với nội dung nào?",
    "options": [
      "A. Động viên cán bộ, chiến sĩ phát huy tinh thần trách nhiệm và hoàn thành tốt nhiệm vụ.",
      "B. Đấu tranh tự phê bình và phê bình.",
      "C. Công tác huấn luyện quân sự, nâng cao trình độ, khả năng sẵn sàng chiến đấu và chất lượng thực hiện nhiệm vụ.",
      "D. Thực hành tiết kiệm, cải thiện đời sống vật chất và tinh thần của bộ đội."
    ],
    "answer": 1
  },
  {
    "question": "Câu 7. Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, trong sự nghiệp đấu tranh giải phóng dân tộc, tình thương yêu đồng chí, đồng đội có ý nghĩa như thế nào?",
    "options": [
      "A. Là cơ sở quan trọng củng cố tinh thần đoàn kết, tạo sự thống nhất về ý chí và hành động.",
      "B. Là động lực tinh thần to lớn giúp cán bộ, chiến sĩ vượt qua mọi khó khăn, gian khổ, hiểm nguy.",
      "C. Là yếu tố góp phần nâng cao đời sống vật chất, tinh thần và bảo đảm điều kiện sinh hoạt cho cán bộ, chiến sĩ.",
      "D. Là phẩm chất được phát huy chủ yếu trong chiến đấu, góp phần xây dựng mối quan hệ đoàn kết giữa cán bộ và chiến sĩ."
    ],
    "answer": 1
  },
  {
    "question": "Câu 8. Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, trong sự nghiệp xây dựng và bảo vệ Tổ quốc hiện nay, tình thương yêu đồng chí, đồng đội góp phần bảo đảm quân đội hoàn thành tốt chức năng nào?",
    "options": [
      "A. Đội quân chiến đấu, thực hiện tốt nhiệm vụ huấn luyện, sẵn sàng chiến đấu và bảo vệ vững chắc Tổ quốc.",
      "B. Đội quân công tác, thực hiện tốt công tác dân vận, tham gia xây dựng cơ sở chính trị và củng cố mối quan hệ với Nhân dân.",
      "C. Đội quân chiến đấu, đội quân công tác và đội quân lao động sản xuất.",
      "D. Đội quân chiến đấu và đội quân công tác, đồng thời tham gia thực hiện các nhiệm vụ phát triển kinh tế - xã hội, phòng, chống thiên tai, cứu hộ, cứu nạn."
    ],
    "answer": 2
  },
  {
    "question": "Câu 9. Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, tình thương yêu đồng chí, đồng đội hướng tới mục tiêu cao nhất là gì?",
    "options": [
      "A. Nâng cao tinh thần trách nhiệm, phát huy năng lực và bảo đảm mỗi quân nhân hoàn thành tốt chức trách, nhiệm vụ được giao.",
      "B. Phục vụ mục đích, lý tưởng cách mạng của Đảng, lợi ích dân tộc và hạnh phúc của nhân dân.",
      "C. Cải thiện đời sống vật chất, tinh thần, tạo điều kiện thuận lợi để cán bộ, chiến sĩ yên tâm công tác và hoàn thành nhiệm vụ.",
      "D. Xây dựng mối quan hệ đoàn kết, thống nhất, nâng cao chất lượng quản lý và tổ chức thực hiện nhiệm vụ trong đơn vị."
    ],
    "answer": 1
  },
  {
    "question": "Câu 10. Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, cán bộ các cấp cần thực hiện phương châm nào sau đây trong quản lý bộ đội?",
    "options": [
      "A. Chủ động nắm tình hình, tăng cường kiểm tra, giám sát và duy trì chặt chẽ nền nếp quản lý bộ đội.",
      "B. Gần bộ đội, hiểu bộ đội, giúp đỡ bộ đội.",
      "C. Tăng cường quản lý bằng mệnh lệnh, quy định, chế độ và phát huy tính tự giác của quân nhân.",
      "D. Quản lý chặt chẽ quân nhân thông qua hồ sơ, sổ sách, chế độ báo cáo và hệ thống thông tin quản lý."
    ],
    "answer": 1
  },
  {
    "question": "Câu 11. Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, việc phát huy trách nhiệm nêu gương của cán bộ, đảng viên nhằm mục đích gì?",
    "options": [
      "A. Góp phần nâng cao ý thức trách nhiệm và tinh thần tự giác của cán bộ, đảng viên trong thực hiện nhiệm vụ.",
      "B. Tạo sức lan tỏa trong học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.",
      "C. Góp phần nâng cao chất lượng thực hiện nhiệm vụ và hiệu quả các phong trào thi đua trong đơn vị.",
      "D. Tạo động lực để cán bộ, đảng viên phấn đấu hoàn thành tốt chức trách, nhiệm vụ được giao."
    ],
    "answer": 1
  },
  {
    "question": "Câu 12. Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, cán bộ chủ trì các cấp phải thực hiện tốt yêu cầu nào trong quan hệ với cấp dưới?",
    "options": [
      "A. Duy trì sự nghiêm túc, chặt chẽ trong chỉ đạo, điều hành và tổ chức thực hiện nhiệm vụ.",
      "B. Gương mẫu, gần gũi, tôn trọng, yêu thương và giúp đỡ cấp dưới.",
      "C. Phát huy vai trò chỉ huy, tăng cường kiểm tra, đôn đốc và giữ vững nguyên tắc trong quan hệ công tác.",
      "D. Bảo đảm sự thống nhất trong lãnh đạo, chỉ huy, duy trì kỷ luật và nâng cao hiệu quả thực hiện nhiệm vụ."
    ],
    "answer": 1
  },
  {
    "question": "Câu 13. Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, một trong những giải pháp quan trọng để củng cố tình thương yêu đồng chí, đồng đội là gì?",
    "options": [
      "A. Tăng cường tổ chức các hoạt động tập thể, sinh hoạt đơn vị và giao lưu giữa cán bộ, chiến sĩ.",
      "B. Kịp thời phát hiện, giải quyết các mâu thuẫn ngay từ cơ sở.",
      "C. Đẩy mạnh công tác giáo dục, tuyên truyền.",
      "D. Tăng cường kiểm tra, quản lý và duy trì nghiêm các chế độ, nền nếp trong đơn vị."
    ],
    "answer": 1
  },
  {
    "question": "Câu 14. Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, mục tiêu cuối cùng của các giải pháp đẩy mạnh học tập và làm theo tư tưởng Hồ Chí Minh về tình thương yêu đồng chí, đồng đội là gì?",
    "options": [
      "A. Góp phần nâng cao chất lượng các phong trào thi đua và xây dựng môi trường văn hóa tốt đẹp trong Quân đội.",
      "B. Xây dựng Quân đội nhân dân Việt Nam vững mạnh về chính trị, tuyệt đối trung thành với Đảng, Nhà nước và Nhân dân, hoàn thành thắng lợi mọi nhiệm vụ được giao.",
      "C. Góp phần nâng cao chất lượng đời sống vật chất, tinh thần và điều kiện công tác của cán bộ, chiến sĩ.",
      "D. Xây dựng mối quan hệ đoàn kết, thống nhất, trách nhiệm giữa cán bộ với chiến sĩ và giữa các quân nhân trong đơn vị."
    ],
    "answer": 1
  },
  {
    "question": "Câu 15. Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, trong xây dựng tình thương yêu đồng chí, đồng đội, người cán bộ phải kiên quyết đấu tranh với biểu hiện gì?",
    "options": [
      "A. Thiếu chủ động, kinh nghiệm và kỹ năng trong tổ chức, quản lý bộ đội.",
      "B. Quan liêu, vô cảm, thiếu trách nhiệm đối với bộ đội.",
      "C. Thiếu sâu sát, chưa kịp thời trong nắm bắt tình hình và giải quyết công việc.",
      "D. Thiếu linh hoạt trong phương pháp lãnh đạo, chỉ huy và tổ chức thực hiện nhiệm vụ."
    ],
    "answer": 1
  },
  {
    "question": "Câu 16: Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, biểu hiện cụ thể của nhu cầu tự thân là ý thức chủ động tự hoàn thiện mình và phát triển một cách bền vững. Theo đó, nội dung nào dưới đây phản ánh đầy đủ nhất biểu hiện của nhu cầu tự thân?",
    "options": [
      "A. Chủ động nâng cao trình độ chuyên môn, nghiệp vụ, hoàn thành tốt chức trách, nhiệm vụ và tích cực khắc phục hạn chế của bản thân.",
      "B. Sống có mục đích, có lý tưởng; ý thức tự học tập, tự rèn luyện; điều chỉnh hành vi theo chuẩn mực đạo đức, pháp luật; khát vọng vươn lên bằng lao động, cống hiến và tự chịu trách nhiệm về suy nghĩ, lời nói, hành động.",
      "C. Chủ động phát huy năng lực, tích cực đổi mới phương pháp công tác, tham gia các phong trào thi đua và đóng góp sáng kiến cho đơn vị.",
      "D. Tự giác chấp hành kỷ luật, điều lệnh, điều lệ; giữ gìn phẩm chất đạo đức, lối sống và xây dựng mối quan hệ đoàn kết trong tập thể."
    ],
    "answer": 1
  },
  {
    "question": "Câu 17. Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, theo tư tưởng Hồ Chí Minh, việc học tập không phải để đối phó, lấy hình thức hay “đủ thủ tục”, mà trước hết nhằm mục đích gì?",
    "options": [
      "A. Chủ động nâng cao trình độ, năng lực công tác và đáp ứng tốt hơn yêu cầu nhiệm vụ được giao.",
      "B. Vì sự trưởng thành của bản thân, vì trách nhiệm trước Đảng, trước Nhân dân và mục tiêu của cách mạng.",
      "C. Tích cực hoàn thiện kiến thức, kỹ năng và phương pháp công tác để nâng cao chất lượng thực hiện nhiệm vụ.",
      "D. Phát huy khả năng của bản thân, tạo động lực phấn đấu và đóng góp ngày càng thiết thực cho tập thể, đơn vị."
    ],
    "answer": 1
  },
  {
    "question": "Câu 18. Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, Chủ tịch Hồ Chí Minh khẳng định: “Học hỏi là một việc phải tiếp tục suốt đời. Suốt đời phải gắn liền lý luận với công tác thực tế...”. Nội dung trên nhấn mạnh yêu cầu nào đối với mỗi cán bộ, đảng viên?",
    "options": [
      "A. Chủ động học tập, bổ sung kiến thức và nâng cao năng lực chuyên môn.",
      "B. Học tập phải diễn ra thường xuyên, suốt đời và gắn lý luận với thực tiễn công tác.",
      "C. Thường xuyên nghiên cứu lý luận, kết hợp với rèn luyện phương pháp công tác và nâng cao khả năng vận dụng kiến thức.",
      "D. Tích cực học tập, rèn luyện để hoàn thiện bản thân và vận dụng kiến thức vào thực hiện chức trách, nhiệm vụ được giao."
    ],
    "answer": 1
  },
  {
    "question": "Câu 19. Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, nhu cầu tự thân chính là động lực nội sinh để mỗi cán bộ, đảng viên tự giác rèn luyện đạo đức cách mạng. Theo đồng chí, việc rèn luyện đó trước hết phải bắt đầu từ đâu?",
    "options": [
      "A. Từ việc chủ động nâng cao năng lực chuyên môn, hoàn thành tốt chức trách, nhiệm vụ được giao.",
      "B. Từ suy nghĩ, động cơ và việc làm hằng ngày.",
      "C. Từ việc tích cực tham gia các phong trào thi đua, hoạt động tập thể và xây dựng đơn vị.",
      "D. Từ việc thường xuyên học tập, nghiên cứu lý luận và vận dụng vào thực tiễn công tác."
    ],
    "answer": 1
  },
  {
    "question": "Câu 20. Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh trở thành nhu cầu tự thân góp phần xây dựng Đảng ta như thế nào?",
    "options": [
      "A. Có đội ngũ cán bộ, đảng viên ngày càng đông về số lượng, đáp ứng yêu cầu xây dựng tổ chức đảng các cấp.",
      "B. Ngày càng trong sạch, vững mạnh, đáp ứng yêu cầu sự nghiệp cách mạng trong tình hình mới.",
      "C. Có đội ngũ cán bộ, đảng viên trẻ, có trình độ, năng lực và tích cực tham gia thực hiện nhiệm vụ chính trị.",
      "D. Có chất lượng công tác phát triển đảng ngày càng cao, chú trọng bồi dưỡng và kết nạp quần chúng ưu tú."
    ],
    "answer": 1
  },
  {
    "question": "Câu 21. Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, để việc học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh trở thành nhu cầu tự thân cần kiên quyết đấu tranh chống biểu hiện nào trong nội bộ?",
    "options": [
      "A. Thiếu chủ động trong học tập, rèn luyện, công tác và chưa đáp ứng đầy đủ yêu cầu nhiệm vụ.",
      "B. Chủ nghĩa cá nhân, suy thoái tư tưởng chính trị, đạo đức, lối sống, “tự diễn biến”, “tự chuyển hóa”.",
      "C. Hạn chế về trình độ chuyên môn, nghiệp vụ, kinh nghiệm thực tiễn và phương pháp công tác.",
      "D. Thiếu điều kiện bảo đảm, cơ sở vật chất và phương tiện phục vụ học tập, rèn luyện và công tác."
    ],
    "answer": 1
  },
  {
    "question": "Câu 22. Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, để việc học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh trở thành nhu cầu tự thân cần gắn chặt với nhiệm vụ nào?",
    "options": [
      "A. Xây dựng đội ngũ cán bộ, đảng viên có phẩm chất, năng lực, uy tín ngang tầm nhiệm vụ.",
      "B. Phát huy vai trò, trách nhiệm của cán bộ, đảng viên trong xây dựng tổ chức đảng và đơn vị vững mạnh.",
      "C. Nâng cao chất lượng công tác giáo dục chính trị, tư tưởng, đạo đức, lối sống và ý thức trách nhiệm của quân nhân.",
      "D. Tăng cường công tác quản lý, giáo dục, rèn luyện cán bộ, đảng viên gắn với yêu cầu thực hiện chức trách, nhiệm vụ."
    ],
    "answer": 0
  },
  {
    "question": "Câu 23. Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, để việc học tập và làm theo Bác trở thành nhu cầu tự thân, cấp ủy các cấp cần duy trì thường xuyên nội dung nào?",
    "options": [
      "A. Tăng cường kiểm tra, đánh giá việc chấp hành chế độ, nền nếp và thực hiện nhiệm vụ của cán bộ, đảng viên.",
      "B. Duy trì tự phê bình, phê bình và thực hiện tốt việc “tự soi, tự sửa” trong cán bộ, đảng viên.",
      "C. Đẩy mạnh các hoạt động văn hóa, văn nghệ, thể dục thể thao nhằm xây dựng môi trường đoàn kết trong đơn vị.",
      "D. Tăng cường tổ chức các hoạt động thi đua, hội thao, hội thi nhằm tạo động lực phấn đấu cho cán bộ, chiến sĩ."
    ],
    "answer": 1
  },
  {
    "question": "Câu 24. Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, việc học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh trở thành nhu cầu tự thân phải được cụ thể hóa vào đâu?",
    "options": [
      "A. Từng vị trí công tác, chức trách, nhiệm vụ và quá trình học tập, rèn luyện của cán bộ, đảng viên.",
      "B. Các hoạt động văn hóa, văn nghệ và xây dựng môi trường văn hóa trong cơ quan, đơn vị.",
      "C. Các phong trào thi đua, hoạt động thể dục thể thao và sinh hoạt tập thể của cán bộ, chiến sĩ.",
      "D. Hoạt động tăng gia sản xuất, thực hành tiết kiệm và nâng cao đời sống vật chất trong đơn vị."
    ],
    "answer": 0
  },
  {
    "question": "Câu 25. Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, để việc học tập và làm theo Bác trở thành nhu cầu tự thân, cán bộ chủ trì đơn vị giữ vai trò như thế nào?",
    "options": [
      "A. Chủ động tổ chức, quản lý và điều hành các hoạt động của đơn vị theo đúng chức trách, nhiệm vụ được giao.",
      "B. Gương mẫu trong học tập, tu dưỡng, rèn luyện và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.",
      "C. Chủ động nghiên cứu, đổi mới phương pháp công tác và nâng cao chất lượng thực hiện nhiệm vụ của đơn vị.",
      "D. Tăng cường kiểm tra, đôn đốc, đánh giá kết quả học tập và làm theo Bác của cán bộ, đảng viên, quần chúng."
    ],
    "answer": 1
  },
  {
    "question": "Câu 2. Qua nghiên cứu chuyên đề năm 2026, mục tiêu trực tiếp của việc nâng cao nhận thức, trách nhiệm của quân nhân trong thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại là gì?",
    "options": [
      "A. Nâng cao trình độ chuyên môn, nghiệp vụ của quân nhân, đáp ứng yêu cầu xây dựng Quân đội trong tình hình mới.",
      "B. Hình thành sự thống nhất về nhận thức, ý chí và hành động trong tổ chức thực hiện Bộ tiêu chí.",
      "C. Hoàn thiện phương thức quản lý, chỉ huy, điều hành và nâng cao trách nhiệm của các cơ quan, đơn vị trong tổ chức thực hiện.",
      "D. Đổi mới phương pháp huấn luyện, nâng cao chất lượng đào tạo và khả năng thực hiện nhiệm vụ của quân nhân."
    ],
    "answer": 1
  },
  {
    "question": "Câu 3. Qua nghiên cứu chuyên đề năm 2026, việc tổ chức thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại phải được tiến hành theo yêu cầu nào dưới đây?",
    "options": [
      "A. Thực hiện theo từng đợt cao điểm, gắn với các nhiệm vụ trọng tâm và yêu cầu cụ thể của từng giai đoạn công tác.",
      "B. Thực hiện thường xuyên, liên tục, gắn với mọi hoạt động của cơ quan, đơn vị.",
      "C. Thực hiện theo yêu cầu kiểm tra, hướng dẫn của cấp trên, kết hợp với đánh giá kết quả thực hiện nhiệm vụ.",
      "D. Thực hiện chủ yếu trong công tác giáo dục chính trị, kết hợp với tuyên truyền, quán triệt và nâng cao nhận thức của quân nhân."
    ],
    "answer": 1
  },
  {
    "question": "Câu 4. Qua nghiên cứu chuyên đề năm 2026, yếu tố nào quyết định chất lượng tổ chức thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại ở mỗi cơ quan, đơn vị?",
    "options": [
      "A. Điều kiện doanh trại, cơ sở vật chất và môi trường công tác bảo đảm cho quân nhân thực hiện nhiệm vụ.",
      "B. Nhận thức và trách nhiệm của cấp ủy, chỉ huy cùng toàn thể quân nhân.",
      "C. Trang bị kỹ thuật hiện đại, đồng bộ, đáp ứng yêu cầu thực hiện nhiệm vụ của cơ quan, đơn vị.",
      "D. Nguồn kinh phí bảo đảm cho việc đầu tư, mua sắm trang thiết bị và tổ chức thực hiện các yêu cầu đặt ra."
    ],
    "answer": 1
  },
  {
    "question": "Câu 5. Qua nghiên cứu chuyên đề năm 2026, việc thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại cần tránh biểu hiện nào sau đây?",
    "options": [
      "A. Chủ động cụ thể hóa nghị quyết, kế hoạch thành nội dung, chỉ tiêu và biện pháp phù hợp với đặc điểm, nhiệm vụ của từng cơ quan, đơn vị.",
      "B. Giao khoán trách nhiệm cho cơ quan chính trị hoặc một bộ phận thực hiện.",
      "C. Phân công rõ trách nhiệm cho từng cơ quan, tổ chức, cá nhân, bảo đảm phát huy vai trò của từng lực lượng trong tổ chức thực hiện.",
      "D. Gắn trách nhiệm thực hiện Bộ tiêu chí với chức trách, nhiệm vụ của từng quân nhân và kết quả xây dựng cơ quan, đơn vị."
    ],
    "answer": 1
  },
  {
    "question": "Câu 6. Qua nghiên cứu chuyên đề năm 2026, yêu cầu quan trọng trong tổ chức thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại phải bảo đảm mối quan hệ như thế nào giữa nhận thức và hành động?",
    "options": [
      "A. Nhận thức đúng phải được củng cố thường xuyên thông qua học tập, quán triệt và làm cơ sở cho quá trình tổ chức thực hiện nhiệm vụ.",
      "B. Nhận thức đúng phải được chuyển hóa thành hành động cụ thể trong thực hiện chức trách, nhiệm vụ.",
      "C. Nhận thức đúng phải được ưu tiên trước, còn việc tổ chức thực hiện có thể điều chỉnh theo điều kiện và yêu cầu thực tế.",
      "D. Hành động thực tiễn cần được coi trọng hơn nhận thức, tập trung vào kết quả thực hiện nhiệm vụ và các tiêu chí đã xác định."
    ],
    "answer": 1
  },
  {
    "question": "Câu 7. Qua nghiên cứu chuyên đề năm 2026, việc tổ chức thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại phải được gắn chặt với nội dung nào để bảo đảm tính thiết thực?",
    "options": [
      "A. Các nhiệm vụ thường xuyên và yêu cầu xây dựng chính quy của cơ quan, đơn vị.",
      "B. Thực hiện nhiệm vụ chính trị trung tâm của cơ quan, đơn vị.",
      "C. Các hoạt động giáo dục, huấn luyện và rèn luyện của cơ quan, đơn vị.",
      "D. Các nhiệm vụ xây dựng tổ chức và duy trì nền nếp của cơ quan, đơn vị."
    ],
    "answer": 1
  },
  {
    "question": "Câu 8. Qua nghiên cứu chuyên đề năm 2026, cấp ủy, tổ chức đảng cần tập trung lãnh đạo nội dung nào để bảo đảm Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại được triển khai thống nhất?",
    "options": [
      "A. Tăng cường lãnh đạo công tác giáo dục, quán triệt, nâng cao nhận thức và trách nhiệm của cán bộ, đảng viên trong thực hiện.",
      "B. Quán triệt, cụ thể hóa nghị quyết và tổ chức thực hiện chặt chẽ, đồng bộ.",
      "C. Tăng cường kiểm tra, giám sát, kịp thời phát hiện, chấn chỉnh những hạn chế và nâng cao chất lượng tổ chức thực hiện.",
      "D. Đầu tư cơ sở vật chất hiện đại để bảo đảm triển khai một cách toàn diện, hiệu quả."
    ],
    "answer": 1
  },
  {
    "question": "Câu 9. Qua nghiên cứu chuyên đề năm 2026, trong tổ chức thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại, trách nhiệm của người đứng đầu được thể hiện rõ nhất ở nội dung nào?",
    "options": [
      "A. Chỉ đạo xây dựng kế hoạch năm, xác định rõ nội dung, chỉ tiêu và tiến độ thực hiện của cơ quan, đơn vị.",
      "B. Nêu gương, trực tiếp lãnh đạo, tổ chức, kiểm tra và chịu trách nhiệm về kết quả thực hiện",
      "C. Chỉ đạo kiểm tra, đánh giá kết quả thực hiện, kịp thời phát hiện và chấn chỉnh những hạn chế, khuyết điểm.",
      "D. Phân công nhiệm vụ cho cơ quan chính trị, làm tốt công tác tham mưu triển khai xây dựng kế hoạch tuyên truyền, giáo dục để mỗi quân nhân nắm được các nội dung của Bộ Tiêu chí."
    ],
    "answer": 1
  },
  {
    "question": "Câu 10. Qua nghiên cứu chuyên đề năm 2026, việc thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại chỉ đạt hiệu quả khi bảo đảm yêu cầu nào sau đây?",
    "options": [
      "A. Phân công rõ nhiệm vụ cho từng tổ chức, lực lượng, bảo đảm phát huy vai trò và trách nhiệm của từng chủ thể trong đơn vị.",
      "B. Phát huy sức mạnh tổng hợp của các tổ chức, lực lượng và từng quân nhân trong toàn đơn vị.",
      "C. Phát huy vai trò của cấp ủy và người chỉ huy quyết liệt trong triển khai thực hiện. Đồng thời thường xuyên kiểm tra, đôn đốc.",
      "D. Phát huy vai trò của cơ quan chính trị và các tổ chức quần chúng, tạo sự thống nhất trong nhận thức và hành động của quân nhân."
    ],
    "answer": 1
  },
  {
    "question": "Câu 11. Qua nghiên cứu chuyên đề năm 2026, để bảo đảm thực hiện hiệu quả Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại, cấp ủy, tổ chức đảng cần tập trung đổi mới nội dung nào trong công tác lãnh đạo?",
    "options": [
      "A. Đổi mới phương thức lãnh đạo, tập trung bảo đảm nguồn lực và các điều kiện cần thiết phù hợp với yêu cầu xây dựng Quân đội hiện đại.",
      "B. Ban hành nghị quyết chuyên đề, cụ thể hóa mục tiêu, chỉ tiêu và giải pháp phù hợp với đặc điểm, nhiệm vụ của từng cơ quan, đơn vị.",
      "C. Đổi mới phương thức lãnh đạo, tập trung nâng cao chất lượng công tác hậu cần, kỹ thuật đáp ứng yêu cầu nhiệm vụ.",
      "D. Cụ thể hóa mục tiêu, chỉ tiêu và giải pháp phù hợp với đặc điểm, nhiệm vụ của từng cơ quan, đơn vị, bảo đảm tính khả thi."
    ],
    "answer": 1
  },
  {
    "question": "Câu 12. Qua nghiên cứu chuyên đề năm 2026, yêu cầu đặt ra đối với cấp ủy trong lãnh đạo thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại là gì?",
    "options": [
      "A. Xác định phương hướng chung, phân công nhiệm vụ cụ thể và phát huy vai trò tham mưu của các cơ quan chuyên môn.",
      "B. Kết hợp chặt chẽ giữa ban hành nghị quyết, tổ chức thực hiện, kiểm tra và sơ kết, tổng kết.",
      "C. Giao nhiệm vụ cho cơ quan tham mưu, đồng thời tăng cường theo dõi, kiểm tra và định kỳ đánh giá kết quả thực hiện.",
      "D. Tập trung công tác tuyên truyền, giáo dục, nâng cao nhận thức và trách nhiệm của cán bộ, quân nhân trong toàn đơn vị."
    ],
    "answer": 1
  },
  {
    "question": "Câu 13. Qua nghiên cứu chuyên đề năm 2026, vì sao việc cụ thể hóa nội dung Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại trong nghị quyết lãnh đạo của cấp ủy có ý nghĩa đặc biệt quan trọng như thế nào?",
    "options": [
      "A. Để tăng cường vai trò lãnh đạo, chỉ đạo của cấp ủy và người chỉ huy các cấp trong tổ chức thực hiện Bộ tiêu chí.",
      "B. Để chuyển yêu cầu của Bộ tiêu chí thành mục tiêu, nhiệm vụ và biện pháp phù hợp với thực tiễn của từng đơn vị.",
      "C. Để làm căn cứ xác định nội dung thi đua, đánh giá kết quả và biểu dương những tập thể, cá nhân có thành tích trong thực hiện.",
      "D. Để tạo sự thống nhất trong xây dựng kế hoạch, tổ chức thực hiện và chế độ báo cáo giữa các cơ quan, đơn vị."
    ],
    "answer": 1
  },
  {
    "question": "Câu 14. Qua nghiên cứu chuyên đề năm 2026, trong quá trình lãnh đạo thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại, cấp ủy cần tránh biểu hiện nào?",
    "options": [
      "A. Tập trung lãnh đạo, chỉ đạo nhưng chủ yếu thông qua cơ quan chức năng, chưa sâu sát việc tổ chức thực hiện ở cơ sở.",
      "B. Buông lỏng lãnh đạo hoặc khoán trắng cho cơ quan chức năng.",
      "C. Chỉ đạo thực hiện theo kế hoạch, coi trọng kiểm tra, sơ kết, tổng kết nhưng chưa gắn đầy đủ với trách nhiệm của từng cấp.",
      "D. Phân công nhiệm vụ cho các cơ quan, tổ chức, lực lượng nhưng thiếu kiểm tra, đôn đốc và chưa kịp thời tháo gỡ khó khăn trong thực hiện."
    ],
    "answer": 1
  },
  {
    "question": "Câu 15. Qua nghiên cứu chuyên đề năm 2026, người chỉ huy phát huy vai trò trong thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại chủ yếu thông qua nội dung nào?",
    "options": [
      "A. Tổ chức, điều hành, kiểm tra và bảo đảm các điều kiện cần thiết để thực hiện nhiệm vụ trong đơn vị.",
      "B. Tổ chức, điều hành, kiểm tra và trực tiếp chịu trách nhiệm về kết quả thực hiện trong đơn vị.",
      "C. Tổ chức, điều hành, phân công nhiệm vụ và theo dõi kết quả thực hiện của các cơ quan, đơn vị trực thuộc.",
      "D. Tổ chức, điều hành, kiểm tra giao nhiệm vụ cụ thể cho các cơ quan làm tốt công tác tham mưu trong triển khai thực hiện."
    ],
    "answer": 1
  },
  {
    "question": "Câu 16. Qua nghiên cứu chuyên đề năm 2026, yêu cầu đối với chính ủy, chính trị viên trong tổ chức thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại là gì?",
    "options": [
      "A. Chủ trì công tác đảng, công tác chính trị; phối hợp với người chỉ huy phát huy vai trò của các tổ chức đoàn thể xây dựng quyết tâm thực hiện.",
      "B. Chủ trì công tác đảng, công tác chính trị; phối hợp với người chỉ huy tạo sự thống nhất trong lãnh đạo và tổ chức thực hiện.",
      "C. Chủ trì công tác đảng, công tác chính trị; phối hợp với các cơ quan chuyên môn tạo sự thống nhất trong lãnh đạo và tổ chức thực hiện.",
      "D. Chủ trì công tác đảng, công tác chính trị; phối hợp với các cơ quan, đơn vị tổ chức học tập, quán triệt và nâng cao nhận thức trong thực hiện."
    ],
    "answer": 1
  },
  {
    "question": "Câu 17. Qua nghiên cứu chuyên đề năm 2026, cơ quan chính trị các cấp cần tập trung tham mưu nội dung nào để nâng cao chất lượng thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại?",
    "options": [
      "A. Tham mưu xây dựng kế hoạch, bảo đảm nguồn lực và tổ chức thực hiện các nội dung liên quan đến Bộ tiêu chí theo chức năng, nhiệm vụ được giao.",
      "B. Tham mưu công tác đảng, công tác chính trị; đẩy mạnh tuyên truyền, giáo dục, kiểm tra và hướng dẫn tổ chức thực hiện Bộ tiêu chí.",
      "C. Tham mưu nâng cao chất lượng công tác hậu cần, bảo đảm đời sống và điều kiện vật chất phục vụ thực hiện Bộ tiêu chí trong toàn quân.",
      "D. Tham mưu nâng cao chất lượng công tác kỹ thuật, quản lý trang bị và bảo đảm khả năng khai thác, sử dụng vũ khí, trang bị theo yêu cầu hiện đại hóa."
    ],
    "answer": 1
  },
  {
    "question": "Câu 18. Qua nghiên cứu chuyên đề năm 2026, việc kiểm tra thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại cần tập trung vào yêu cầu nào?",
    "options": [
      "A. Tập trung đánh giá những kết quả đã đạt được, xác định cách làm hiệu quả và lựa chọn mô hình tiêu biểu để nhân rộng trong đơn vị.",
      "B. Kịp thời phát hiện hạn chế, xác định nguyên nhân và đề ra biện pháp khắc phục, nâng cao chất lượng thực hiện Bộ tiêu chí.",
      "C. Tập trung kiểm tra những đơn vị có kết quả triển khai chưa hiệu quả để xác định trách nhiệm và yêu cầu chấn chỉnh, khắc phục.",
      "D. Ưu tiên kiểm tra các đơn vị điểm, đơn vị được lựa chọn làm mô hình để đánh giá kết quả, rút kinh nghiệm và nhân rộng cách làm phù hợp."
    ],
    "answer": 1
  },
  {
    "question": "Câu 19. Qua nghiên cứu chuyên đề năm 2026, việc sơ kết, tổng kết thực hiện Bộ tiêu chí nhằm mục đích chủ yếu nào?",
    "options": [
      "A. Đánh giá kết quả triển khai, biểu dương, khen thưởng những tập thể, cá nhân có thành tích và lựa chọn mô hình tiêu biểu để nhân rộng.",
      "B. Đánh giá đúng thực chất kết quả, rút kinh nghiệm và bổ sung giải pháp nâng cao chất lượng thực hiện.",
      "C. Đánh giá mức độ hoàn thành các chỉ tiêu, làm cơ sở phục vụ công tác thi đua, khen thưởng và tổng hợp kết quả cuối năm.",
      "D. Xác định mức độ hoàn thành nhiệm vụ của cơ quan, đơn vị, làm căn cứ xem xét danh hiệu thi đua và xếp loại cuối năm."
    ],
    "answer": 1
  },
  {
    "question": "Câu 20. Qua nghiên cứu chuyên đề năm 2026, thước đo quan trọng nhất đánh giá hiệu quả lãnh đạo, chỉ đạo thực hiện Bộ tiêu chí là gì?",
    "options": [
      "A. Số lượng văn bản lãnh đạo, chỉ đạo, kế hoạch và hướng dẫn được ban hành trong quá trình tổ chức thực hiện.",
      "B. Mức độ chuyển biến về nhận thức, trách nhiệm và kết quả hoàn thành nhiệm vụ của cơ quan, đơn vị.",
      "C. Số lượng hội nghị, lớp tập huấn, hoạt động tuyên truyền, giáo dục được tổ chức nhằm quán triệt và triển khai Bộ tiêu chí.",
      "D. Mức độ triển khai thực hiện của các đơn vị, khả năng phát hiện, xây dựng và nhân rộng những mô hình mới, cách làm hiệu quả."
    ],
    "answer": 1
  },
  {
    "question": "Câu 21. Qua nghiên cứu chuyên đề năm 2026, yêu cầu xuyên suốt trong đổi mới công tác tuyên truyền, giáo dục về thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại là gì?",
    "options": [
      "A. Bảo đảm thống nhất nội dung, định hướng tuyên truyền và cách thức tổ chức thực hiện Bộ tiêu chí trong các cơ quan, đơn vị.",
      "B. Không ngừng đổi mới, hoàn thiện và nhân rộng các hình thức, phương pháp tuyên truyền theo hướng phong phú, hấp dẫn, dễ hiểu, dễ vận dụng.",
      "C. Tăng cường số lượng báo cáo viên, tuyên truyền viên và lực lượng tham gia phổ biến, giáo dục về Bộ tiêu chí ở các cấp.",
      "D. Đẩy mạnh tuyên truyền tại các đơn vị điểm, đơn vị có kết quả tốt, đồng thời mở rộng các hội thi, hoạt động tìm hiểu nhằm nâng cao nhận thức về Bộ tiêu chí."
    ],
    "answer": 1
  },
  {
    "question": "Câu 22. Qua nghiên cứu chuyên đề năm 2026, việc đưa nội dung thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại vào giáo dục chính trị có ý nghĩa chủ yếu nào?",
    "options": [
      "A. Bổ sung nội dung, hoàn thiện chương trình giáo dục chính trị và bảo đảm quân nhân được tiếp cận đầy đủ các yêu cầu của Bộ tiêu chí.",
      "B. Hình thành nhận thức thường xuyên, liên tục của quân nhân thông qua các hoạt động giáo dục chính trị, tư tưởng.",
      "C. Tăng thời lượng học tập chính trị, tạo điều kiện để quân nhân có thêm thời gian nghiên cứu và trao đổi về Bộ tiêu chí.",
      "D. Hoàn thiện chương trình đào tạo, bồi dưỡng cán bộ, chiến sĩ theo yêu cầu xây dựng Quân đội nhân dân Việt Nam hiện đại."
    ],
    "answer": 1
  },
  {
    "question": "Câu 23. Qua nghiên cứu chuyên đề năm 2026, tại sao việc giáo dục về thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại không chỉ tiến hành trong giờ học chính trị?",
    "options": [
      "A. Vì cần kết hợp nội dung giáo dục với chương trình huấn luyện, sinh hoạt và các hoạt động của đơn vị để sử dụng hiệu quả thời gian, đồng thời củng cố nhận thức cho quân nhân.",
      "B. Vì nhận thức về Bộ tiêu chí cần được củng cố thường xuyên thông qua quá trình thực hiện chức trách, nhiệm vụ và các hoạt động thực tiễn của đơn vị.",
      "C. Vì cần giảm sự phụ thuộc vào giờ học chính trị, tăng cường các hình thức giáo dục trực quan và hoạt động thực hành để nâng cao hiệu quả tiếp thu.",
      "D. Vì cần tập trung giáo dục bổ sung cho những quân nhân còn hạn chế về nhận thức, đồng thời phát huy vai trò tự học, tự nghiên cứu của cán bộ, chiến sĩ."
    ],
    "answer": 1
  },
  {
    "question": "Câu 24. Qua nghiên cứu chuyên đề năm 2026, yêu cầu đối với việc sử dụng các phương tiện thông tin hiện đại trong tuyên truyền thực hiện Bộ tiêu chí là gì?",
    "options": [
      "A. Thay thế hoàn toàn các hình thức giáo dục truyền thống.",
      "B. Tăng sức thuyết phục, định hướng đúng nhận thức và trách nhiệm của quân nhân.",
      "C. Giảm thời lượng sinh hoạt chính trị tránh nhàm chán, quan tâm hơn đến hình thức tuyên truyền trên trang mạng xã hội.",
      "D. Hạn chế tuyên truyền trực tiếp để bảo đảm thực hiện các nhiệm vụ khác."
    ],
    "answer": 1
  },
  {
    "question": "Câu 25. Qua nghiên cứu chuyên đề năm 2026, vì sao việc tuyên truyền về thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại phải gắn với Phong trào Thi đua Quyết thắng và các cuộc vận động?",
    "options": [
      "A. Tạo thêm nội dung, hình thức tổ chức phong trào thi đua và các hoạt động vận động quần chúng, góp phần nâng cao khí thế thi đua trong đơn vị.",
      "B. Tạo sự lan tỏa rộng rãi, thu hút quân nhân tham gia, đồng thời chuyển yêu cầu của Bộ tiêu chí từ nhận thức thành động lực và hành động cụ thể trong thực hiện nhiệm vụ.",
      "C. Làm cơ sở theo dõi, đánh giá kết quả thực hiện phong trào thi đua, các cuộc vận động và phục vụ công tác bình xét, khen thưởng hằng năm.",
      "D. Bảo đảm thống nhất nội dung tuyên truyền, giáo dục với tổ chức phong trào thi đua trong đơn vị, phát huy vai trò của các tổ chức quần chúng trong thực hiện Bộ tiêu chí."
    ],
    "answer": 1
  },
  {
    "question": "Câu 26. Qua nghiên cứu chuyên đề năm 2026, việc thường xuyên cổ vũ, động viên quân nhân trong thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại nhằm mục đích chủ yếu nào?",
    "options": [
      "A. Tạo động lực thi đua, khuyến khích quân nhân phấn đấu nâng cao thành tích và kết quả thực hiện nhiệm vụ của cơ quan, đơn vị.",
      "B. Khơi dậy tinh thần trách nhiệm, phát huy tính tích cực, chủ động, sáng tạo và tự giác của quân nhân trong thực hiện các yêu cầu của Bộ tiêu chí.",
      "C. Góp phần duy trì nền nếp giáo dục chính trị, bảo đảm hoàn thành đầy đủ các nội dung, chỉ tiêu giáo dục theo kế hoạch hằng năm.",
      "D. Tạo không khí thi đua sôi nổi, tăng cường sự gắn kết và khuyến khích quân nhân tích cực tham gia các hoạt động tập thể của đơn vị."
    ],
    "answer": 1
  },
  {
    "question": "Câu 27. Qua nghiên cứu chuyên đề năm 2026, tiêu chí đánh giá hiệu quả của công tác tuyên truyền, giáo dục về thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại là gì?",
    "options": [
      "A. Mức độ đầy đủ, thường xuyên của các hoạt động tuyên truyền, giáo dục được tổ chức, bảo đảm các nội dung cơ bản được phổ biến đến cán bộ, chiến sĩ trong đơn vị.",
      "B. Mức độ chuyển biến về nhận thức, trách nhiệm và hành động của quân nhân trong thực hiện nhiệm vụ.",
      "C. Mức độ phong phú, đa dạng của các nội dung, hình thức tuyên truyền, giáo dục được triển khai, phù hợp với từng đối tượng và điều kiện thực tiễn của đơn vị.",
      "D. Mức độ tham gia, trách nhiệm của đội ngũ báo cáo viên, tuyên truyền viên trong tổ chức các hoạt động tuyên truyền, giáo dục tại đơn vị."
    ],
    "answer": 1
  },
  {
    "question": "Câu 28. Qua nghiên cứu chuyên đề năm 2026, yêu cầu cốt lõi của việc phát huy sức mạnh tổng hợp trong thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại là gì?",
    "options": [
      "A. Phân công rõ chức năng, nhiệm vụ, quyền hạn và trách nhiệm giữa các cơ quan, đơn vị, bảo đảm phối hợp chặt chẽ trong tổ chức thực hiện.",
      "B. Phát huy đầy đủ vai trò, trách nhiệm của mọi tổ chức, mọi lực lượng và từng quân nhân trong tổ chức thực hiện.",
      "C. Tăng cường phối hợp với cấp ủy, chính quyền và các lực lượng trên địa bàn, tạo sự thống nhất trong thực hiện các nội dung liên quan.",
      "D. Mở rộng các mô hình hoạt động quần chúng, phát huy sáng kiến và cách làm hiệu quả nhằm tạo chuyển biến tích cực trong thực hiện Bộ tiêu chí."
    ],
    "answer": 1
  },
  {
    "question": "Câu 29. Qua nghiên cứu chuyên đề năm 2026, việc phát huy sức mạnh tổng hợp trong thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại phải bảo đảm nguyên tắc nào?",
    "options": [
      "A. Phân công nhiệm vụ rõ ràng giữa các cơ quan, đơn vị, xác định cụ thể trách nhiệm của từng lực lượng trong quá trình tổ chức thực hiện các tiêu chí.",
      "B. Phát huy đầy đủ vai trò, trách nhiệm của mọi tổ chức, mọi lực lượng và từng quân nhân trong tổ chức thực hiện.",
      "C. Tăng cường hoạt động phối hợp giữa các cơ quan, đơn vị với cấp ủy, chính quyền và các tổ chức ở địa phương trong quá trình triển khai thực hiện.",
      "D. Mở rộng các mô hình hoạt động quần chúng, tạo môi trường thuận lợi để cán bộ, chiến sĩ tham gia và phát huy vai trò trong thực hiện các tiêu chí."
    ],
    "answer": 1
  },
  {
    "question": "Câu 30. Qua nghiên cứu chuyên đề năm 2026, yếu tố nào bảo đảm việc thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại đạt hiệu quả bền vững?",
    "options": [
      "A. Đầu tư nhiều hơn về cơ sở vật chất, trang thiết bị và các điều kiện bảo đảm nhằm đáp ứng yêu cầu xây dựng đơn vị theo hướng chính quy, hiện đại.",
      "B. Tăng thời lượng giáo dục chính trị, đẩy mạnh tuyên truyền, quán triệt nhằm nâng cao nhận thức và trách nhiệm của cán bộ, chiến sĩ trong đơn vị.",
      "C. Sự kết hợp đồng bộ giữa lãnh đạo, tổ chức thực hiện, kiểm tra, đánh giá và phát huy tính tự giác của quân nhân.",
      "D. Tăng số lượng phong trào thi đua, đa dạng hóa hình thức hoạt động nhằm tạo khí thế và động lực thúc đẩy cán bộ, chiến sĩ thực hiện nhiệm vụ."
    ],
    "answer": 2
  }
];