import glob
import json
import re


def build_data_js():
    questions = []
    files = glob.glob("*.txt")

    if not files:
        print("❌ KHÔNG TÌM THẤY FILE .TXT NÀO TRONG THƯ MỤC!")
        return

    for file_path in files:
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            lines = f.readlines()

        i = 0
        n = len(lines)

        while i < n:
            line = lines[i].strip()

            # 1. Tìm dòng bắt đầu bằng "Câu X."
            if re.match(r"^Câu\s*\d+[\.\:]", line, re.IGNORECASE):
                q_text = line

                # Gom thêm dòng nếu câu hỏi bị rớt dòng
                i += 1
                while (
                    i < n
                    and not re.match(
                        r"^[A-D][\.\)]", lines[i].strip(), re.IGNORECASE
                    )
                    and not lines[i].strip().startswith("Đáp án:")
                ):
                    if lines[i].strip():
                        q_text += " " + lines[i].strip()
                    i += 1

                options = []
                ans_index = 0

                # 2. Gom 4 lựa chọn A, B, C, D
                while (
                    i < n
                    and len(options) < 4
                    and not lines[i].strip().startswith("Đáp án:")
                ):
                    current_line = lines[i].strip()
                    if re.match(r"^[A-D][\.\)]", current_line, re.IGNORECASE):
                        opt_text = current_line
                        i += 1
                        # Gom các dòng nối tiếp thuộc cùng 1 đáp án (nếu bị rớt dòng như đáp án B)
                        while (
                            i < n
                            and not re.match(
                                r"^[A-D][\.\)]", lines[i].strip(), re.IGNORECASE
                            )
                            and not lines[i].strip().startswith("Đáp án:")
                            and not re.match(
                                r"^Câu\s*\d+[\.\:]",
                                lines[i].strip(),
                                re.IGNORECASE,
                            )
                        ):
                            if lines[i].strip():
                                opt_text += " " + lines[i].strip()
                            i += 1
                        options.append(opt_text)
                    else:
                        i += 1

                # 3. Tìm dòng "Đáp án: X"
                while i < n:
                    current_line = lines[i].strip()
                    if current_line.startswith("Đáp án:"):
                        match = re.search(r"Đáp án:\s*([A-D])", current_line, re.IGNORECASE)
                        if match:
                            ans_char = match.group(1).upper()
                            ans_index = {"A": 0, "B": 1, "C": 2, "D": 3}.get(
                                ans_char, 0
                            )
                        i += 1
                        break
                    elif re.match(
                        r"^Câu\s*\d+[\.\:]", current_line, re.IGNORECASE
                    ):
                        break
                    i += 1

                if q_text and len(options) == 4:
                    questions.append(
                        {
                            "question": q_text,
                            "options": options,
                            "answer": ans_index,
                        }
                    )
            else:
                i += 1

    with open("data.js", "w", encoding="utf-8") as f:
        f.write(
            "const RAW_QUESTIONS = "
            + json.dumps(questions, ensure_ascii=False, indent=2)
            + ";"
        )

    print(
        f"===> THÀNH CÔNG: Đã trích xuất {len(questions)} câu hỏi vào file data.js!"
    )


if __name__ == "__main__":
    build_data_js()